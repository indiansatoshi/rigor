export const config = {
    name: 'UpdateMetrics',
    type: 'event' as const,
    subscribes: ['initiative.validated'],
    emits: [],
    flows: ['strategy-workflow']
};

export const handler = async (event: any, { state, logger }: any) => {
    logger.info('Updating metrics based on validated initiative');

    const initiatives = await state.get('app', 'initiatives') || [];
    const metrics = await state.get('app', 'metrics') || [];

    // Calculate total initiatives count
    const totalInitiatives = initiatives.length;
    const fundedInitiatives = initiatives.filter((i: any) => i.status === 'Funded').length;
    const fundingRate = totalInitiatives > 0
        ? Math.round((fundedInitiatives / totalInitiatives) * 100)
        : 0;

    // Update metrics
    const updatedMetrics = metrics.map((m: any) => {
        if (m.title === 'Runway') {
            // Recalculate runway based on initiatives
            const totalBudget = initiatives
                .filter((i: any) => i.status === 'Funded')
                .reduce((sum: number, i: any) => {
                    const budgetNum = parseInt(i.budget?.replace(/[$k]/g, '') || '0');
                    return sum + budgetNum;
                }, 0);

            return {
                ...m,
                value: `${Math.max(18 - Math.floor(totalBudget / 100), 12)}m`,
                change: totalBudget > 500 ? 'Decreasing' : 'Stable'
            };
        }
        return m;
    });

    await state.set('app', 'metrics', updatedMetrics);

    logger.info('📊 Metrics updated', {
        totalInitiatives,
        fundedInitiatives,
        fundingRate: `${fundingRate}%`
    });
};
