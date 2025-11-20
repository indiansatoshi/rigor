import { Metric, OKR, LeanCanvasSection, Milestone, PIPlan, RoadmapItem } from "@/types/domain";

export const strategyMetrics: Metric[] = [
    {
        title: "Monthly Recurring Revenue",
        value: "$42,380",
        change: "+12.5%",
        changeType: "positive",
        period: "vs last month"
    },
    {
        title: "Customer Churn Rate",
        value: "2.1%",
        change: "-0.3%",
        changeType: "positive",
        period: "vs last month"
    },
    {
        title: "New Signups",
        value: "1,204",
        change: "+8%",
        changeType: "positive",
        period: "vs last month"
    }
];

export const companyOKRs: OKR[] = [
    {
        objective: "Achieve Product-Market Fit",
        progress: 75,
        keyResults: [
            { description: "Increase user activation rate from 20% to 40%", current: 30, target: 40 },
            { description: "Achieve a Net Promoter Score (NPS) of 50", current: 40, target: 50 },
            { description: "Reduce time to first value from 10 to 5 minutes", current: 7, target: 5 }
        ]
    },
    {
        objective: "Increase Brand Awareness",
        progress: 40,
        keyResults: [
            { description: "Grow social media following to 10K", current: 4000, target: 10000 },
            { description: "Publish 20 thought leadership articles", current: 8, target: 20 }
        ]
    }
];

export const leanCanvasSections: LeanCanvasSection[] = [
    { title: "Problem", items: 3, status: "Defined" },
    { title: "Solution", items: 3, status: "In Progress" },
    { title: "Unique Value Proposition", items: 1, status: "Defined" },
    { title: "Customer Segments", items: 2, status: "Validated" }
];

export const planningMetrics: Metric[] = [
    {
        title: "Active Initiatives",
        value: "18",
        change: "+4",
        changeType: "positive",
        period: "vs last quarter"
    },
    {
        title: "On Track",
        value: "14",
        change: "78%",
        changeType: "neutral",
        period: "completion rate"
    },
    {
        title: "At Risk",
        value: "3",
        change: "-1",
        changeType: "positive",
        period: "vs last month"
    },
    {
        title: "Upcoming Releases",
        value: "5",
        change: "Next 30 days",
        changeType: "neutral",
        period: ""
    }
];

export const upcomingMilestones: Milestone[] = [
    {
        title: "Q1 2025 Planning Complete",
        date: "Dec 15, 2024",
        team: "Product",
        status: "On Track"
    },
    {
        title: "Mobile App v2.0 Release",
        date: "Dec 20, 2024",
        team: "Engineering",
        status: "At Risk"
    },
    {
        title: "Marketing Campaign Launch",
        date: "Jan 5, 2025",
        team: "Marketing",
        status: "On Track"
    }
];

export const piProgress: PIPlan[] = [
    {
        name: "PI 2024.4",
        progress: 75,
        features: 24,
        completed: 18,
        teams: ["Platform", "Mobile", "Web"]
    },
    {
        name: "PI 2025.1",
        progress: 15,
        features: 32,
        completed: 5,
        teams: ["Platform", "Mobile", "Web", "Data"]
    }
];

export const roadmapItems: RoadmapItem[] = [
    {
        id: "INIT-101",
        title: "AI-Powered Search",
        quarter: "Q1 2025",
        status: "Planning",
        team: "Platform"
    },
    {
        id: "INIT-102",
        title: "Mobile Offline Mode",
        quarter: "Q1 2025",
        status: "In Progress",
        team: "Mobile"
    },
    {
        id: "INIT-103",
        title: "Advanced Analytics Dashboard",
        quarter: "Q2 2025",
        status: "Planning",
        team: "Data"
    }
];
