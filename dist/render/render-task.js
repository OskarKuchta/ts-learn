export const renderTasks = (tasks, tasksContainer) => {
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
