import { getEventQueue } from '../lib/EventQueue';

export const config = {
    name: 'UpdateEpic',
    type: 'api' as const,
    path: '/api/epics/:id',
    method: 'PATCH' as const,
    emits: ['epic.updated'],
    flows: ['strategy-workflow']
};

export const handler = async (req: any, { state, logger, emit }: any) => {
    const epicId = req.pathParams.id;
    logger.info('Updating epic', { epicId, updates: req.body });

    const epics = await state.get('app', 'epics') || [];
    const epicIndex = epics.findIndex((e: any) => e.id === epicId);

    if (epicIndex === -1) {
        return {
            status: 404,
            body: { error: 'Epic not found' }
        };
    }

    // Update epic
    const updatedEpic = {
        ...epics[epicIndex],
        ...req.body
    };

    epics[epicIndex] = updatedEpic;
    await state.set('app', 'epics', epics);

    logger.info('Epic updated', { epicId, status: updatedEpic.status, progress: updatedEpic.progress });

    // Publish to event queue for progress recalculation
    const eventQueue = getEventQueue();
    await eventQueue.publish('epic.updated', updatedEpic);

    // Also emit for Motia compatibility
    await emit({
        topic: 'epic.updated',
        data: updatedEpic
    });

    return {
        status: 200,
        body: updatedEpic
    };
};
