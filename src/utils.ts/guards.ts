import { Task } from "../entities/task.js";
export function isTask(obj: unknown): obj is Task {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "id" in obj &&
    "title" in obj &&
    "completed" in obj
  );
}
