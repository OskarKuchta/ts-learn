import { categories } from "./types/type.js";
import { renderCategories } from "./render/render-categories.js";
import { renderTasks } from "./render/render-task.js";
import { tasks, addTask } from "./tasks/task.js";
const tasksContainer = document.querySelector(".tasks");
const taskInput = document.querySelector("#name");
const btn = document.querySelector(".btn");
const categoriesContainer = document.querySelector(".categories");
let selectedCategory;
btn.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        name: taskInput.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks, tasksContainer);
});
renderCategories(categories, categoriesContainer, selectedCategory);
renderTasks(tasks, tasksContainer);
