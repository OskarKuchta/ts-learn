const tasksContainer = document.querySelector(".tasks");
const taskInput = document.querySelector("#name");
const btn = document.querySelector(".btn");
const categoriesContainer = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
let tasks = [{
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
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkbox);
        tasksContainer.appendChild(taskElement);
        document.querySelectorAll("input[type= checkbox]").forEach((element) => element.addEventListener("click", () => {
            const trashes = [...document.querySelectorAll("input[type= checkbox]")];
            const elementIndex = trashes.indexOf(element);
            tasks = tasks.filter((el, index) => {
                return index !== elementIndex;
            });
            render();
        }));
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
renderCategories();
render();
