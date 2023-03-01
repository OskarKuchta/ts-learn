const tasksContainer: HTMLElement = document.querySelector(".tasks");
const taskInput: HTMLInputElement = document.querySelector("#name");
const btn: HTMLButtonElement = document.querySelector(".btn");
const tasks: {
    title: string;
    done: boolean;
}[] = [{
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
        const taskElement: HTMLElement = document.createElement("li");
        const labelElement: HTMLLabelElement = document.createElement("label");
        const id: string = `task-${index}`;
        labelElement.innerText = task.title;
        labelElement.setAttribute("for", id);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = task.title;
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
const addTask = (task: {title: string, done: boolean}) => {
    tasks.push(task);
}
btn.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask({title: taskInput.value , done: false});
    render();
});
render();