import { Task, Category, categories } from "./types/type.js";
import { renderCategories } from "./render/render-categories.js";
import { renderTasks } from "./render/render-task.js";
import { tasks, addTask } from "./tasks/task.js";
const tasksContainer: HTMLElement = document.querySelector(".tasks");
const taskInput: HTMLInputElement = document.querySelector("#name");
const btn: HTMLButtonElement = document.querySelector(".btn");
const categoriesContainer: HTMLElement = document.querySelector(".categories");
let selectedCategory: Category;
btn.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask({
        name: taskInput.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks, tasksContainer);
});

renderCategories(categories, categoriesContainer,selectedCategory);
renderTasks(tasks, tasksContainer);