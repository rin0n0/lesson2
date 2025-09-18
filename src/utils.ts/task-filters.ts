import { Task, Filter } from "../entities/task.js";
export function filterByStatus(tasks: Task[], filter: Filter): Task[] {
  if (filter === "all") return tasks;
  if (filter === "active") return tasks.filter((t) => !t.completed);
  return tasks.filter((t) => t.completed);
}

export function filterByQuery(tasks: Task[], query: string): Task[] {
  const q = query.trim().toLowerCase();
  if (!q) return tasks;
  return tasks.filter((t) => t.title.toLowerCase().includes(q));
}

export function sortByDate(tasks: Task[]): Task[] {
  return [...tasks].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );
}
