const tasksContainer = document.querySelector(".tasks");
const taskInput = document.querySelector("#name");
const btn = document.querySelector(".btn");
const tasks = [{
        name: "Throw up rubbish",
        done: false
    },
    {
        name: "Do workout",
        done: false
    },
    {
        name: "Do important call",
        done: false
    }];
const render = () => {
    tasksContainer.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerHTML = task.name;
        tasksContainer.appendChild(taskElement);
    });
};
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
btn.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskInput.value);
    render();
});
render();
