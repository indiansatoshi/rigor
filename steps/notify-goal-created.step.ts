export const config = {
    name: 'NotifyGoalCreated',
    type: 'event' as const,
    subscribes: ['goal.created'],
    emits: [],
    flows: ['strategy-workflow']
};

export const handler = async (event: any, { logger }: any) => {
    const goal = event.data;

    logger.info('🎯 NOTIFICATION: New goal created!', {
        goalId: goal.id,
        title: goal.title,
        owner: goal.owner,
        dueDate: goal.dueDate
    });

    // In a real implementation, this would:
    // - Send an email to the goal owner
    // - Post to Slack channel
    // - Create a notification in the UI
    // - Log to external monitoring system

    logger.info(`📧 Would send email to ${goal.owner} about new goal: ${goal.title}`);
    logger.info(`📢 Would post to #strategy Slack channel: New goal "${goal.title}" created`);
};
