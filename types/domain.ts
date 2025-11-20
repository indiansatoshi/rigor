export interface Metric {
  title: string;
  value: string;
  change: string;
  changeType?: "positive" | "negative" | "neutral";
  period: string;
}

export interface KeyResult {
  description: string;
  current: number;
  target: number;
}

export interface OKR {
  objective: string;
  progress: number;
  keyResults: KeyResult[];
}

export interface LeanCanvasSection {
  title: string;
  items: number;
  status: "Defined" | "In Progress" | "Validated" | "Unknown";
}

export interface Milestone {
  title: string;
  date: string;
  team: string;
  status: "On Track" | "At Risk" | "Delayed" | "Completed";
}

export interface PIPlan {
  name: string;
  progress: number;
  features: number;
  completed: number;
  teams: string[];
}

export interface RoadmapItem {
  id: string;
  title: string;
  quarter: string;
  status: "Planning" | "In Progress" | "Done" | "Blocked";
  team: string;
}
