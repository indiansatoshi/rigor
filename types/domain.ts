export interface Metric {
  title: string;
  value: string;
  change: string;
  changeType?: "positive" | "negative" | "neutral";
  period?: string;
  section?: string;
}

// --- Company Level (Strategy) ---
export interface CompanyGoal {
  id: string;
  title: string;
  description: string;
  status: "On Track" | "At Risk" | "Off Track" | "Completed";
  progress: number;
  owner: string;
  dueDate: string;
  okrs: OKR[];
}

export interface OKR {
  id: string;
  objective: string;
  progress: number;
  keyResults: KeyResult[];
}

export interface KeyResult {
  id: string;
  description: string;
  current: number;
  target: number;
  unit: string;
}

export interface LeanCanvasSection {
  id: string;
  title: string;
  items: string[];
  status: "Draft" | "Defined" | "Validated";
  color?: string;
}

// --- Portfolio Level (Investment) ---
export interface Initiative {
  id: string;
  title: string;
  description: string;
  goalId: string; // Link to Company Goal
  status: "Proposed" | "Funded" | "In Progress" | "Completed" | "Cancelled";
  owner: string;
  budget: string;
  timeline: {
    start: string;
    end: string;
  };
  progress: number;
}

// --- Product Level (Discovery) ---
export interface Opportunity {
  id: string;
  title: string;
  description: string;
  initiativeId: string; // Link to Initiative
  status: "Identified" | "Prioritized" | "Solved" | "Dismissed";
  solutions: Solution[];
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  status: "Idea" | "Prototyping" | "Validated" | "Rejected";
  validationResults?: string;
}

// --- Project Level (Delivery) ---
export interface Epic {
  id: string;
  title: string;
  description: string;
  solutionId: string; // Link to Solution (Idea)
  status: "To Do" | "In Progress" | "Review" | "Done";
  assignee: string;
  stories: Story[];
  progress: number;
}

export interface Story {
  id: string;
  title: string;
  points: number;
  status: "To Do" | "In Progress" | "Done";
  assignee: string;
}

// --- Legacy / Shared ---
export interface Milestone {
  title: string;
  date: string;
  team: string;
  status: string;
}

export interface Incident {
  id: string;
  title: string;
  severity: "high" | "medium" | "low";
  status: string;
  time: string;
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
