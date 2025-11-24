export const config = {
    name: 'RecalculateGoalProgress',
    type: 'event' as const,
    subscribes: ['epic.updated'],
    emits: ['goal.progress.updated'],
    flows: ['strategy-workflow']
};

export const handler = async (event: any, { state, logger, emit }: any) => {
    const epic = event.data;

    logger.info('Recalculating goal progress based on epic update', { epicId: epic.id });

    // Get all data to trace back to goal
    const opportunities = await state.get('app', 'opportunities') || [];
    const initiatives = await state.get('app', 'initiatives') || [];
    const goals = await state.get('app', 'goals') || [];
    const epics = await state.get('app', 'epics') || [];

    // Find solution from epic
    const solution = opportunities
        .flatMap((opp: any) => opp.solutions || [])
        .find((sol: any) => sol.id === epic.solutionId);

    if (!solution) {
        logger.warn('Could not find solution for epic', { solutionId: epic.solutionId });
        return;
    }

    // Find opportunity
    const opportunity = opportunities.find((opp: any) =>
        opp.solutions?.some((sol: any) => sol.id === solution.id)
    );

    if (!opportunity) {
        logger.warn('Could not find opportunity for solution');
        return;
    }

    // Find initiative
    const initiative = initiatives.find((init: any) => init.id === opportunity.initiativeId);

    if (!initiative) {
        logger.warn('Could not find initiative for opportunity');
        return;
    }

    // Find goal
    const goalIndex = goals.findIndex((goal: any) => goal.id === initiative.goalId);

    if (goalIndex === -1) {
        logger.warn('Could not find goal for initiative');
        return;
    }

    const goal = goals[goalIndex];
    const oldProgress = goal.progress;

    // Calculate new progress based on all epics related to this goal
    const relatedInitiatives = initiatives.filter((init: any) => init.goalId === goal.id);
    const relatedOpportunities = opportunities.filter((opp: any) =>
        relatedInitiatives.some((init: any) => init.id === opp.initiativeId)
    );
    const relatedSolutions = relatedOpportunities.flatMap((opp: any) => opp.solutions || []);
    const relatedEpics = epics.filter((e: any) =>
        relatedSolutions.some((sol: any) => sol.id === e.solutionId)
    );

    // Calculate average progress
    const totalProgress = relatedEpics.reduce((sum: number, e: any) => sum + (e.progress || 0), 0);
    const newProgress = relatedEpics.length > 0
        ? Math.round(totalProgress / relatedEpics.length)
        : 0;

    // Update goal progress
    goals[goalIndex] = {
        ...goal,
        progress: newProgress
    };

    await state.set('app', 'goals', goals);

    logger.info('📈 Goal progress updated', {
        goalId: goal.id,
        oldProgress,
        newProgress,
        relatedEpics: relatedEpics.length
    });

    // Emit event
    await emit({
        topic: 'goal.progress.updated',
        data: {
            goalId: goal.id,
            oldProgress,
            newProgress
        }
    });
};
