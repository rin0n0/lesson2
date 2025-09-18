export const Filter = ["all", "active", "completed"];
import { generateId } from "../utils.ts/id.js";
export function makeTask(title) {
    return {
        id: generateId(),
        title: title,
        completed: false,
        createdAt: new Date(),
    };
}
//# sourceMappingURL=task.js.map