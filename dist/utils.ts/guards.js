export function isTask(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        "id" in obj &&
        "title" in obj &&
        "completed" in obj);
}
//# sourceMappingURL=guards.js.map