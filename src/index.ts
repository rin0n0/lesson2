import { makeTask, Task } from "./entities/task.js";
import {
  filterByStatus,
  filterByQuery,
  sortByDate,
} from "./utils.ts/task-filters.js";

const tasks: Task[] = [
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
