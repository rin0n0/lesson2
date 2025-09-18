import { makeTask } from "./entities/task.js";
import { filterByStatus, filterByQuery, sortByDate, } from "./utils.ts/task-filters.js";
const tasks = [
    makeTask("Купить хлеб"),
    makeTask("Сделать уроки"),
    makeTask("Написать код"),
];
if (tasks[1]) {
    tasks[1].completed = true;
}
console.log("Все задачи:", tasks);
console.log("Только активные:", filterByStatus(tasks, "active"));
console.log("Поиск по 'код':", filterByQuery(tasks, "код"));
console.log("Сортировка:", sortByDate(tasks));
import { isTask } from "./utils.ts/guards.js";
const maybeTask = {
    id: "x1",
    title: "Test",
    completed: false,
    createdAt: new Date(),
};
if (isTask(maybeTask)) {
    console.log("Это задача:", maybeTask.title);
}
else {
    console.log("Не задача");
}
import formatTitle from "./utils.ts/format.js";
console.log(formatTitle("   привет    мир   "));
//# sourceMappingURL=index.js.map