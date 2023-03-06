export const tasks = [{
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
export const addTask = (task) => {
    tasks.push(task);
};
