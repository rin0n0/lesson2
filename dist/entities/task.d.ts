export type Task = {
    readonly id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
};
export declare const Filter: readonly ["all", "active", "completed"];
export type Filter = (typeof Filter)[number];
export declare function makeTask(title: string): Task;
//# sourceMappingURL=task.d.ts.map