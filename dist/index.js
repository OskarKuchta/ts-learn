const tasksContainer = document.querySelector(".tasks");
const taskInput = document.querySelector("#name");
const btn = document.querySelector(".btn");
const tasks = [{
        title: "Throw up rubbish",
        done: false
    },
    {
        title: "Do workout",
        done: false
    },
    {
        title: "Do important call",
        done: false
    }];
const render = () => {
    tasksContainer.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        const labelElement = document.createElement("label");
        const id = `task-${index}`;
        labelElement.innerText = task.title;
        labelElement.setAttribute("for", id);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = task.title;
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
const addTask = (task) => {
    tasks.push(task);
};
btn.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ title: taskInput.value, done: false });
    render();
});
render();
