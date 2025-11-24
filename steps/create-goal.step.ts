import { getEventQueue } from '../lib/EventQueue';

export const config = {
    name: 'CreateGoal',
    type: 'api' as const,
    path: '/api/goals',
    method: 'POST' as const,
    emits: ['goal.created'],
    flows: ['strategy-workflow']
};

export const handler = async (req: any, { state, logger, emit }: any) => {
    logger.info('Creating new goal', { goal: req.body });

    // Generate ID
    const goals = await state.get('app', 'goals') || [];
    const newId = `GOAL-${goals.length + 1}`;

    // Create goal object
    const newGoal = {
        id: newId,
        title: req.body.title,
        description: req.body.description,
        status: req.body.status || "Proposed",
        progress: 0,
        owner: req.body.owner,
        dueDate: req.body.dueDate,
        okrs: req.body.okrs || []
    };

    // Add to state
    goals.push(newGoal);
    await state.set('app', 'goals', goals);

    logger.info('Goal created', { goalId: newId });

    // Publish to event queue (custom implementation)
    const eventQueue = getEventQueue();
    await eventQueue.publish('goal.created', newGoal);

    // Also emit for Motia (in case it starts working)
    await emit({
        topic: 'goal.created',
        data: newGoal
    });

    return {
        status: 201,
        body: newGoal
    };
};
