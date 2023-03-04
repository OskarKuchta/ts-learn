import { Task, Category, categories } from "./types/type";
import { renderCategories } from "./render/render-categories";
import { renderTasks } from "./render/render-task";
import { tasks, addTask } from "./tasks/task";
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

renderCategories(categories, categoriesContainer, selectedCategory);
renderTasks(tasks, tasksContainer);
