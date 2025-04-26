export interface Task {
  id: string;
  name: string;
  description: string;
  dueDate: string; // ISO format date string
  priority: "low" | "medium" | "high";
  status: "pending" | "in-progress" | "completed";
}
