import {
    Metric,
    OKR,
    LeanCanvasSection,
    Milestone,
    PIPlan,
    RoadmapItem,
    Incident,
    ServiceStatus,
    SupportTicket,
    FeedbackItem,
    SectionOverview,
    ActivityItem,
    DeadlineItem
} from "@/types/domain";

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
        id: "R-005",
        title: "Performance Optimization",
        status: "In Progress",
        quarter: "Q4 2024",
        team: "Platform",
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

export const governanceMetrics: Metric[] = [
    {
        title: "System Uptime",
        value: "99.8%",
        change: "+0.2%",
        changeType: "positive",
        period: "vs last month"
    },
    {
        title: "Open Support Tickets",
        value: "23",
        change: "-5",
        changeType: "positive",
        period: "vs last week"
    },
    {
        title: "Customer Satisfaction",
        value: "4.6/5",
        change: "+0.3",
        changeType: "positive",
        period: "vs last month"
    },
    {
        title: "Feedback Items",
        value: "47",
        change: "+12",
        changeType: "neutral",
        period: "this month"
    }
];

export const operationsMetrics = [
    { label: "System Uptime", value: "99.98%", trend: "up", change: "+0.02%" },
    { label: "Response Time", value: "124ms", trend: "down", change: "-15ms" },
    { label: "Error Rate", value: "0.12%", trend: "down", change: "-0.03%" },
    { label: "Active Users", value: "8,547", trend: "up", change: "+234" },
];

export const incidents: Incident[] = [
    {
        id: "INC-001",
        title: "Database connection timeout",
        severity: "high",
        status: "resolved",
        time: "2 hours ago",
    },
    {
        id: "INC-002",
        title: "API rate limit exceeded",
        severity: "medium",
        status: "investigating",
        time: "30 minutes ago",
    },
    {
        id: "INC-003",
        title: "Slow page load times",
        severity: "low",
        status: "monitoring",
        time: "1 hour ago",
    },
];

export const services: ServiceStatus[] = [
    { name: "API Gateway", status: "operational", latency: "45ms" },
    { name: "Database", status: "operational", latency: "12ms" },
    { name: "Cache Layer", status: "operational", latency: "3ms" },
    { name: "Message Queue", status: "degraded", latency: "156ms" },
    { name: "Storage", status: "operational", latency: "28ms" },
    { name: "CDN", status: "operational", latency: "89ms" },
];

export const supportMetrics = {
    totalTickets: 1247,
    open: 156,
    inProgress: 89,
    resolved: 1002,
    avgResponseTime: "2h 15m",
    satisfaction: 4.6,
};

export const tickets: SupportTicket[] = [
    {
        id: "TICK-1247",
        title: "Unable to login after password reset",
        customer: "Sarah Johnson",
        priority: "high",
        status: "in-progress",
        assignee: "JD",
        created: "2 hours ago",
        category: "Authentication",
    },
    {
        id: "TICK-1246",
        title: "Feature request: Dark mode",
        customer: "Mike Chen",
        priority: "low",
        status: "open",
        assignee: "SM",
        created: "4 hours ago",
        category: "Feature Request",
    },
    {
        id: "TICK-1245",
        title: "Payment processing error",
        customer: "Emma Wilson",
        priority: "critical",
        status: "in-progress",
        assignee: "AK",
        created: "1 hour ago",
        category: "Billing",
    },
];

export const categoryStats = [
    { name: "Technical Issue", count: 45, trend: "+12%" },
    { name: "Billing", count: 23, trend: "-5%" },
    { name: "Feature Request", count: 34, trend: "+8%" },
    { name: "How-to", count: 28, trend: "+3%" },
    { name: "Authentication", count: 18, trend: "-2%" },
    { name: "Other", count: 8, trend: "0%" },
];

export const feedbackMetrics = {
    totalFeedback: 847,
    nps: 42,
    avgRating: 4.2,
    responseRate: 68,
};

export const feedbackItems: FeedbackItem[] = [
    {
        id: "FB-1247",
        user: "Sarah M.",
        type: "feature-request",
        sentiment: "positive",
        rating: 5,
        feedback: "Love the new dashboard! Would be great to have export to PDF functionality.",
        category: "Product",
        date: "2 hours ago",
        status: "under-review",
    },
    {
        id: "FB-1246",
        user: "Mike T.",
        type: "bug-report",
        sentiment: "negative",
        rating: 2,
        feedback: "The mobile app crashes when trying to upload large files.",
        category: "Technical",
        date: "4 hours ago",
        status: "in-progress",
    },
    {
        id: "FB-1245",
        user: "Emma W.",
        type: "general",
        sentiment: "positive",
        rating: 5,
        feedback: "Excellent customer support! My issue was resolved within an hour.",
        category: "Support",
        date: "1 day ago",
        status: "resolved",
    },
];

export const sentimentBreakdown = [
    { label: "Positive", count: 542, percentage: 64, color: "bg-chart-1" },
    { label: "Neutral", count: 203, percentage: 24, color: "bg-chart-3" },
    { label: "Negative", count: 102, percentage: 12, color: "bg-destructive" },
];

export const topCategories = [
    { name: "Product", count: 234 },
    { name: "Technical", count: 189 },
    { name: "UX", count: 156 },
    { name: "Support", count: 123 },
    { name: "Integration", count: 89 },
    { name: "Other", count: 56 },
];

export const homeMetrics: Metric[] = [
    {
        title: "Active Initiatives",
        value: "47",
        change: "+8",
        changeType: "positive",
        period: "vs last month",
        section: "All Sections"
    },
    {
        title: "Completion Rate",
        value: "78%",
        change: "+5%",
        changeType: "positive",
        period: "vs last quarter",
        section: "Overall"
    },
    {
        title: "At Risk Items",
        value: "12",
        change: "-3",
        changeType: "positive",
        period: "vs last week",
        section: "All Sections"
    },
    {
        title: "Team Velocity",
        value: "92",
        change: "+7",
        changeType: "positive",
        period: "story points/sprint",
        section: "Delivery"
    }
];

export const sectionOverview: SectionOverview[] = [
    {
        name: "Strategy",
        href: "/strategy",
        activeItems: 8,
        completedItems: 15,
        progress: 65,
        status: "On Track",
        statusColor: "bg-chart-1",
        recentActivity: "Q1 2025 OKRs defined"
    },
    {
        name: "Discovery",
        href: "/discovery",
        activeItems: 12,
        completedItems: 8,
        progress: 40,
        status: "In Progress",
        statusColor: "bg-chart-3",
        recentActivity: "3 hypotheses validated"
    },
    {
        name: "Planning",
        href: "/planning",
        activeItems: 18,
        completedItems: 14,
        progress: 78,
        status: "On Track",
        statusColor: "bg-chart-1",
        recentActivity: "Sprint 24 planning completed"
    },
    {
        name: "Delivery",
        href: "/delivery",
        activeItems: 47,
        completedItems: 32,
        progress: 68,
        status: "At Risk",
        statusColor: "bg-destructive",
        recentActivity: "3 tasks blocked"
    },
    {
        name: "Governance",
        href: "/governance",
        activeItems: 23,
        completedItems: 45,
        progress: 85,
        status: "On Track",
        statusColor: "bg-chart-1",
        recentActivity: "System uptime 99.8%"
    }
];

export const recentActivity: ActivityItem[] = [
    {
        section: "Strategy",
        action: "OKR updated",
        item: "Achieve Product-Market Fit",
        user: "John Doe",
        time: "2 hours ago",
        iconType: "check"
    },
    {
        section: "Delivery",
        action: "Task blocked",
        item: "Fix payment gateway integration",
        user: "Sarah Chen",
        time: "3 hours ago",
        iconType: "alert"
    },
    {
        section: "Discovery",
        action: "Hypothesis validated",
        item: "Users prefer video tutorials",
        user: "Mike Johnson",
        time: "5 hours ago",
        iconType: "check"
    },
    {
        section: "Planning",
        action: "Release scheduled",
        item: "Mobile App v2.0",
        user: "Lisa Wang",
        time: "1 day ago",
        iconType: "clock"
    }
];

export const upcomingDeadlines: DeadlineItem[] = [
    {
        title: "Q1 2025 Planning Complete",
        section: "Strategy",
        dueDate: "Dec 15, 2024",
        daysLeft: 4,
        priority: "High"
    },
    {
        title: "Mobile App v2.0 Release",
        section: "Planning",
        dueDate: "Dec 20, 2024",
        daysLeft: 9,
        priority: "Critical"
    },
    {
        title: "Customer feedback analysis",
        section: "Discovery",
        dueDate: "Dec 22, 2024",
        daysLeft: 11,
        priority: "Medium"
    }
];
