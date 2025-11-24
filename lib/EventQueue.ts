import Redis from 'ioredis';

export interface EventData {
    topic: string;
    data: any;
    timestamp: string;
    traceId?: string;
}

class EventQueue {
    private publisher: Redis;
    private subscriber: Redis;
    private handlers: Map<string, Array<(data: any) => Promise<void>>>;

    constructor() {
        // Use Motia's Redis instance (check logs for port - it changes each start)
        // For now, hardcode to a known port or parse from env
        const redisPort = parseInt(process.env.REDIS_PORT || '49575');

        this.publisher = new Redis({
            host: '127.0.0.1',
            port: redisPort,
            retryStrategy: (times) => {
                if (times > 3) {
                    console.error('[EventQueue] Redis connection failed after 3 retries');
                    return null; // Stop retrying
                }
                const delay = Math.min(times * 50, 2000);
                return delay;
            }
        });

        this.subscriber = new Redis({
            host: '127.0.0.1',
            port: redisPort
        });

        this.handlers = new Map();

        // Set up message handling
        this.subscriber.on('message', async (channel, message) => {
            try {
                const eventData: EventData = JSON.parse(message);
                const handlers = this.handlers.get(channel) || [];

                console.log(`[EventQueue] Received event on ${channel}:`, eventData);

                // Execute all handlers for this topic
                await Promise.all(
                    handlers.map(handler =>
                        handler(eventData.data).catch(err =>
                            console.error(`[EventQueue] Handler error for ${channel}:`, err)
                        )
                    )
                );
            } catch (error) {
                console.error(`[EventQueue] Error processing message on ${channel}:`, error);
            }
        });
    }

    /**
     * Publish an event to a topic
     */
    async publish(topic: string, data: any, meta?: { traceId?: string }): Promise<void> {
        const eventData: EventData = {
            topic,
            data,
            timestamp: new Date().toISOString(),
            traceId: meta?.traceId
        };

        console.log(`[EventQueue] Publishing event to ${topic}:`, data);

        await this.publisher.publish(topic, JSON.stringify(eventData));
    }

    /**
     * Subscribe to a topic with a handler function
     */
    async subscribe(topic: string, handler: (data: any) => Promise<void>): Promise<void> {
        if (!this.handlers.has(topic)) {
            this.handlers.set(topic, []);
            await this.subscriber.subscribe(topic);
            console.log(`[EventQueue] Subscribed to topic: ${topic}`);
        }

        this.handlers.get(topic)!.push(handler);
    }

    /**
     * Unsubscribe from a topic
     */
    async unsubscribe(topic: string): Promise<void> {
        await this.subscriber.unsubscribe(topic);
        this.handlers.delete(topic);
        console.log(`[EventQueue] Unsubscribed from topic: ${topic}`);
    }

    /**
     * Close connections
     */
    async close(): Promise<void> {
        await this.publisher.quit();
        await this.subscriber.quit();
    }
}

// Singleton instance
let eventQueueInstance: EventQueue | null = null;

export function getEventQueue(): EventQueue {
    if (!eventQueueInstance) {
        eventQueueInstance = new EventQueue();
    }
    return eventQueueInstance;
}

export default EventQueue;
