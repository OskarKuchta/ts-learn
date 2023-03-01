const firstInput: HTMLInputElement = document.querySelector("#input1");
const secondInput: HTMLInputElement = document.querySelector("#input2");
const addBtn = document.querySelector("button");
const add = (v1: number, v2: number) => {
    return v1 + v2
};
addBtn.addEventListener("click", () => {
    const sum = add(Number(firstInput.value), Number(secondInput.value));
    console.log(sum);
});