/* <li>
          <label for="task-1"></label>
          <input type="checkbox" id="task-1" name="Throw out rubbish" />
        </li>
*/
const tasksContainer: HTMLElement = document.querySelector(".tasks");
const taskInput: HTMLInputElement = document.querySelector("#name");
const btn: HTMLButtonElement = document.querySelector(".btn");
const tasks: {
    name: string;
    done: boolean;
}[] = [{
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
        const taskElement: HTMLElement = document.createElement("li");
        taskElement.innerHTML = task.name;
        tasksContainer.appendChild(taskElement);
    });
}
const addTask = (taskName: string) => {
    tasks.push({name: taskName, done: false});
}
btn.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask(taskInput.value);
    render();
});
render();