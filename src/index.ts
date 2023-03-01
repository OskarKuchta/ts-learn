const tasksContainer: HTMLElement = document.querySelector(".tasks");
const taskInput: HTMLInputElement = document.querySelector("#name");
const btn: HTMLButtonElement = document.querySelector(".btn");
const categoriesContainer: HTMLElement = document.querySelector(".categories");
let selectedCategory: Category;
type Category = "general" | "work" | "gym" | "hobby";
type StringOrNumber = "number" | "string";

interface Task {
    name: string;
    done: boolean;
    category?: "general" | "work" | "gym" | "hobby";
}
const categories: Category[] = ["general", "work", "gym", "hobby"];
const tasks: Task[] = [{
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
        const taskElement: HTMLElement = document.createElement("li");
        if (task.category) { 
            taskElement.classList.add(task.category);
        }
        const labelElement: HTMLLabelElement = document.createElement("label");
        const id: string = `task-${index}`;
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = task.name;
        checkbox.id = id;
        checkbox.checked = task.done;
        checkbox.addEventListener("change", () => {
            task.done = !task.done;
        })
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkbox);
        tasksContainer.appendChild(taskElement);
    });
}
const renderCategories = () => {
    categories.forEach((category) => {
        const categoryElement: HTMLElement = document.createElement("li");
        const radioInputElement: HTMLInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            selectedCategory = category;
        });
        const labelElement: HTMLLabelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(labelElement);
        categoryElement.appendChild(radioInputElement);
        categoriesContainer.appendChild(categoryElement);
    })
}
const addTask = (task: Task) => {
    tasks.push(task);
}
btn.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask({
        name: taskInput.value,
        done: false,
        category: selectedCategory,
    });
    render();
});
addTask({name: "do chest", category: "gym", done: false});
renderCategories();
render();