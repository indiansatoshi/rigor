import { getEventQueue } from '../lib/EventQueue';

/**
 * Event Subscribers
 * 
 * This script sets up all event subscribers for the application.
 * It should be run alongside the Motia server to process events.
 */

// Import handler logic
async function notifyGoalCreated(goal: any) {
    console.log('🎯 NOTIFICATION: New goal created!', {
        goalId: goal.id,
        title: goal.title,
        owner: goal.owner,
        dueDate: goal.dueDate
    });

    console.log(`📧 Would send email to ${goal.owner} about new goal: ${goal.title}`);
    console.log(`📢 Would post to #strategy Slack channel: New goal "${goal.title}" created`);
}

async function validateInitiative(initiative: any) {
    console.log('✓ Validating initiative:', { initiativeId: initiative.id });

    const errors: string[] = [];

    // Validation logic
    if (initiative.budget && !initiative.budget.match(/^\$\d+k?$/)) {
        errors.push('Budget must be in format $XXXk');
    }

    if (initiative.timeline?.start && initiative.timeline?.end) {
        const start = new Date(initiative.timeline.start);
        const end = new Date(initiative.timeline.end);
        if (end <= start) {
            errors.push('End date must be after start date');
        }
    }

    if (errors.length === 0) {
        console.log('✅ Initiative validation passed', { initiativeId: initiative.id });

        // Publish validation success event
        const eventQueue = getEventQueue();
        await eventQueue.publish('initiative.validated', {
            initiativeId: initiative.id,
            initiative,
            valid: true
        });
    } else {
        console.log('❌ Initiative validation failed', {
            initiativeId: initiative.id,
            errors
        });

        // Publish validation failed event
        const eventQueue = getEventQueue();
        await eventQueue.publish('initiative.validation-failed', {
            initiativeId: initiative.id,
            valid: false,
            errors
        });
    }
}

async function updateMetrics(validationResult: any) {
    console.log('📊 Updating metrics based on validated initiative');

    // In real implementation, would recalculate metrics
    // For now, just log
    console.log('📊 Metrics updated for initiative:', validationResult.initiativeId);
}

async function recalculateGoalProgress(epic: any) {
    console.log('📈 Recalculating goal progress based on epic update', {
        epicId: epic.id,
        status: epic.status,
        progress: epic.progress
    });

    // In real implementation, would traverse relationships and update goal
    // For now, just log
    console.log('📈 Goal progress recalculated for epic:', epic.id);

    const eventQueue = getEventQueue();
    await eventQueue.publish('goal.progress.updated', {
        goalId: 'GOAL-1', // Would be looked up from epic
        newProgress: epic.progress
    });
}

// Set up all subscriptions
async function setupSubscribers() {
    const eventQueue = getEventQueue();

    console.log('🚀 Setting up event subscribers...');

    // Subscribe to events
    await eventQueue.subscribe('goal.created', notifyGoalCreated);
    await eventQueue.subscribe('initiative.created', validateInitiative);
    await eventQueue.subscribe('initiative.validated', updateMetrics);
    await eventQueue.subscribe('epic.updated', recalculateGoalProgress);

    console.log('✅ Event subscribers ready!');
    console.log('Listening for events on: goal.created, initiative.created, initiative.validated, epic.updated');
}

// Start subscribers
setupSubscribers().catch(error => {
    console.error('Failed to setup subscribers:', error);
    process.exit(1);
});

// Keep process running
process.on('SIGINT', async () => {
    console.log('\n👋 Shutting down event subscribers...');
    const eventQueue = getEventQueue();
    await eventQueue.close();
    process.exit(0);
});
