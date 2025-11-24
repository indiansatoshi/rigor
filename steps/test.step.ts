export const config = {
    name: 'TestEndpoint',
    type: 'api' as const,
    path: '/api/test',
    method: 'GET' as const,
    emits: []
};

export const handler = async (req: any, ctx: any) => {
    ctx.logger.info('Test endpoint called');
    return {
        status: 200,
        body: { message: 'Hello from Motia!' }
    };
};
