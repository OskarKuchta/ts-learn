const tasksContainer = document.querySelector(".tasks");
const taskInput = document.querySelector("#name");
const btn = document.querySelector(".btn");
const categoriesContainer = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
const tasks = [{
        name: "Throw up rubbish",
        done: false,
        category: "general",
    },
    {
        name: "Do workout",
        done: false,
        category: "gym",
    },
    {
        name: "Do important call",
        done: false,
        category: "work"
    }];
const render = () => {
    tasksContainer.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const labelElement = document.createElement("label");
        const id = `task-${index}`;
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = task.name;
        checkbox.id = id;
        checkbox.checked = task.done;
        checkbox.addEventListener("change", () => {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkbox);
        tasksContainer.appendChild(taskElement);
    });
};
const renderCategories = () => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            selectedCategory = category;
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(labelElement);
        categoryElement.appendChild(radioInputElement);
        categoriesContainer.appendChild(categoryElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
btn.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        name: taskInput.value,
        done: false,
        category: selectedCategory,
    });
    render();
});
addTask({ name: "do chest", category: "gym", done: false });
renderCategories();
render();
