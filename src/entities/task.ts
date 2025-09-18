export type Task = {
  readonly id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};
export const Filter = ["all", "active", "completed"] as const;
export type Filter = (typeof Filter)[number];

import { generateId } from "../utils.ts/id.js";
export function makeTask(title: string): Task {
  return {
    id: generateId(),
    title: title,
    completed: false,
    createdAt: new Date(),
  };
}
