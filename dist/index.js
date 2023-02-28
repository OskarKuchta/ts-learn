const firstInput = document.querySelector("#input1");
const secondInput = document.querySelector("#input2");
const addBtn = document.querySelector("button");
const add = (v1, v2) => {return v1 + v2};
addBtn.addEventListener("click", () => {
    const sum = add(firstInput.value, secondInput.value);
    console.log(sum);
});