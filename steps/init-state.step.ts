export const config = {
    name: 'InitializeState',
    type: 'event' as const,
    subscribes: ['motia.started'],
    emits: ['state.initialized']
};

export const handler = async (event: any, { state, logger, emit }: any) => {
    logger.info('Initializing Motia state with seed data');

    // Check if already initialized
    const initialized = await state.get('initialized');
    if (initialized) {
        logger.info('State already initialized, skipping');
        return;
    }

    // Initialize goals
    const initialGoals = [
        {
            id: "GOAL-1",
            title: "Increase Retention by 10%",
            description: "Improve customer retention rates across all segments to drive sustainable growth.",
            status: "On Track",
            progress: 65,
            owner: "CEO",
            dueDate: "Dec 31, 2025",
            okrs: [
                {
                    id: "OKR-1",
                    objective: "Reduce Churn Rate",
                    progress: 70,
                    keyResults: [
                        { id: "KR-1", description: "Reduce monthly churn from 2.5% to 2.0%", current: 2.1, target: 2.0, unit: "%" },
                        { id: "KR-2", description: "Increase Net Dollar Retention to 110%", current: 105, target: 110, unit: "%" }
                    ]
                }
            ]
        },
        {
            id: "GOAL-2",
            title: "Expand to Asia Market",
            description: "Launch operations in Japan and Singapore to tap into new revenue streams.",
            status: "At Risk",
            progress: 30,
            owner: "CSO",
            dueDate: "Jun 30, 2026",
            okrs: [
                {
                    id: "OKR-2",
                    objective: "Establish Regional Presence",
                    progress: 20,
                    keyResults: [
                        { id: "KR-3", description: "Hire Country Manager for Japan", current: 0, target: 1, unit: "hire" },
                        { id: "KR-4", description: "Secure 5 pilot customers", current: 1, target: 5, unit: "customers" }
                    ]
                }
            ]
        }
    ];

    const initialInitiatives = [
        {
            id: "INIT-1",
            title: "Revamp User Onboarding",
            description: "Completely redesign the first-time user experience to improve activation and retention.",
            goalId: "GOAL-1",
            status: "Funded",
            owner: "VP Product",
            budget: "$250k",
            timeline: { start: "Jan 1, 2025", end: "Mar 31, 2025" },
            progress: 40
        },
        {
            id: "INIT-2",
            title: "Launch JP App",
            description: "Localize the mobile application for the Japanese market.",
            goalId: "GOAL-2",
            status: "Proposed",
            owner: "VP Engineering",
            budget: "$150k",
            timeline: { start: "Apr 1, 2025", end: "Jun 30, 2025" },
            progress: 0
        }
    ];

    const initialOpportunities = [
        {
            id: "OPP-1",
            title: "Users don't understand the dashboard",
            description: "New users struggle to interpret the main dashboard metrics, leading to drop-off.",
            initiativeId: "INIT-1",
            status: "Prioritized",
            solutions: [
                {
                    id: "SOL-1",
                    title: "Interactive Tooltips",
                    description: "Add guided tours and tooltips to explain each metric.",
                    status: "Validated",
                    validationResults: "Tested with 5 users, 100% completion rate improvement."
                },
                {
                    id: "SOL-2",
                    title: "Video Walkthrough",
                    description: "Embed a 2-minute video tutorial on the dashboard.",
                    status: "Idea"
                }
            ]
        },
        {
            id: "OPP-2",
            title: "Kanji Support Issues",
            description: "Text rendering breaks when using Kanji characters.",
            initiativeId: "INIT-2",
            status: "Identified",
            solutions: []
        }
    ];

    const initialEpics = [
        {
            id: "EPIC-1",
            title: "Build Interactive Tooltips",
            description: "Implement the tooltip system using the new design system components.",
            solutionId: "SOL-1",
            status: "In Progress",
            assignee: "Dev Team A",
            progress: 60,
            stories: [
                { id: "STORY-1", title: "Design Tooltip Component", points: 3, status: "Done", assignee: "Alice" },
                { id: "STORY-2", title: "Integrate with Dashboard", points: 5, status: "In Progress", assignee: "Bob" },
                { id: "STORY-3", title: "Write Content for Metrics", points: 2, status: "To Do", assignee: "Charlie" }
            ]
        }
    ];

    const initialLeanCanvas = [
        { id: "LC-1", title: "Problem", items: ["Low user retention", "Complex onboarding", "Lack of mobile support"], status: "Defined", color: "bg-red-100 text-red-800" },
        { id: "LC-2", title: "Customer Segments", items: ["SaaS Startups", "Enterprise IT", "Product Managers"], status: "Validated", color: "bg-blue-100 text-blue-800" },
        { id: "LC-3", title: "Unique Value Proposition", items: ["Unified Strategy to Execution Platform", "AI-driven insights"], status: "Defined", color: "bg-purple-100 text-purple-800" },
        { id: "LC-4", title: "Solution", items: ["Interactive Onboarding", "Mobile App", "Advanced Analytics"], status: "Defined", color: "bg-green-100 text-green-800" },
        { id: "LC-5", title: "Revenue Streams", items: ["Subscription (SaaS)", "Enterprise Licensing"], status: "Validated", color: "bg-yellow-100 text-yellow-800" },
    ];

    const initialMetrics = [
        { title: "ARR", value: "$12.5M", change: "+15%", changeType: "positive", period: "vs last year" },
        { title: "Retention", value: "85%", change: "-2%", changeType: "negative", period: "vs target" },
        { title: "Runway", value: "18m", change: "Stable", changeType: "neutral", period: "months" }
    ];

    // Store in state
    await state.set('goals', initialGoals);
    await state.set('initiatives', initialInitiatives);
    await state.set('opportunities', initialOpportunities);
    await state.set('epics', initialEpics);
    await state.set('leanCanvas', initialLeanCanvas);
    await state.set('metrics', initialMetrics);
    await state.set('initialized', true);

    logger.info('State initialized successfully');

    await emit({
        topic: 'state.initialized',
        data: { timestamp: new Date().toISOString() }
    });
};
