export interface Metric {
  title: string;
  value: string;
  change: string;
  changeType?: "positive" | "negative" | "neutral";
  period?: string;
  section?: string;
}

export interface OKR {
  objective: string;
  progress: number;
  keyResults: KeyResult[];
}

export interface KeyResult {
  description: string;
  current: number;
  target: number;
}

export interface LeanCanvasSection {
  title: string;
  items: number;
  status: string;
}

export interface Milestone {
  title: string;
  date: string;
  team: string;
  status: string;
}

export interface PIPlan {
  name: string;
  progress: number;
  completed: number;
  features: number;
  teams: string[];
}

export interface RoadmapItem {
  id: string;
  title: string;
  status: string;
  quarter: string;
  team: string;
}

export interface Incident {
  id: string;
  title: string;
  severity: "high" | "medium" | "low";
  status: string;
  time: string;
}

export interface ServiceStatus {
  name: string;
  status: string;
  latency: string;
}

export interface SupportTicket {
  id: string;
  title: string;
  customer: string;
  priority: "critical" | "high" | "medium" | "low";
  status: string;
  assignee: string;
  created: string;
  category: string;
}

export interface FeedbackItem {
  id: string;
  user: string;
  type: string;
  sentiment: "positive" | "neutral" | "negative";
  rating: number;
  feedback: string;
  category: string;
  date: string;
  status: string;
}

export interface SectionOverview {
  name: string;
  href: string;
  activeItems: number;
  completedItems: number;
  progress: number;
  status: string;
  statusColor: string;
  recentActivity: string;
}

export interface ActivityItem {
  section: string;
  action: string;
  item: string;
  user: string;
  time: string;
  iconType: "check" | "alert" | "clock";
}

export interface DeadlineItem {
  title: string;
  section: string;
  dueDate: string;
  daysLeft: number;
  priority: string;
}
