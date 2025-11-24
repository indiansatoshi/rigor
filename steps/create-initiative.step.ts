import { getEventQueue } from '../lib/EventQueue';

export const config = {
    name: 'CreateInitiative',
    type: 'api' as const,
    path: '/api/initiatives',
    method: 'POST' as const,
    emits: ['initiative.created'],
    flows: ['strategy-workflow']
};

export const handler = async (req: any, { state, logger, emit }: any) => {
    logger.info('Creating new initiative', { initiative: req.body });

    const initiatives = await state.get('app', 'initiatives') || [];
    const newId = `INIT-${initiatives.length + 1}`;

    const newInitiative = {
        id: newId,
        title: req.body.title,
        description: req.body.description,
        goalId: req.body.goalId,
        status: req.body.status || "Proposed",
        owner: req.body.owner,
        budget: req.body.budget,
        timeline: req.body.timeline || { start: "", end: "" },
        progress: 0
    };

    // Add to state
    initiatives.push(newInitiative);
    await state.set('app', 'initiatives', initiatives);

    logger.info('Initiative created', { initiativeId: newId });

    // Publish to event queue
    const eventQueue = getEventQueue();
    await eventQueue.publish('initiative.created', newInitiative);

    // Also emit for Motia compatibility
    await emit({
        topic: 'initiative.created',
        data: newInitiative
    });

    return {
        status: 201,
        body: newInitiative
    };
};
