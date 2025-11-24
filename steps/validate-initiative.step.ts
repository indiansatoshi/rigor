export const config = {
    name: 'ValidateInitiative',
    type: 'event' as const,
    subscribes: ['initiative.created'],
    emits: ['initiative.validated', 'initiative.validation-failed'],
    flows: ['strategy-workflow']
};

export const handler = async (event: any, { state, logger, emit }: any) => {
    const initiative = event.data;

    logger.info('Validating initiative', { initiativeId: initiative.id });

    const errors: string[] = [];

    // Validate goal exists
    const goals = await state.get('app', 'goals') || [];
    const relatedGoal = goals.find((g: any) => g.id === initiative.goalId);

    if (!relatedGoal) {
        errors.push(`Goal ${initiative.goalId} not found`);
    }

    // Validate budget format
    if (initiative.budget && !initiative.budget.match(/^\$\d+k?$/)) {
        errors.push('Budget must be in format $XXXk');
    }

    // Validate timeline
    if (initiative.timeline && initiative.timeline.start && initiative.timeline.end) {
        const start = new Date(initiative.timeline.start);
        const end = new Date(initiative.timeline.end);
        if (end <= start) {
            errors.push('End date must be after start date');
        }
    }

    const isValid = errors.length === 0;

    if (isValid) {
        logger.info('✅ Initiative validation passed', { initiativeId: initiative.id });

        await emit({
            topic: 'initiative.validated',
            data: {
                initiativeId: initiative.id,
                initiative,
                valid: true
            }
        });
    } else {
        logger.warn('❌ Initiative validation failed', {
            initiativeId: initiative.id,
            errors
        });

        await emit({
            topic: 'initiative.validation-failed',
            data: {
                initiativeId: initiative.id,
                valid: false,
                errors
            }
        });
    }
};
