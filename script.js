const addTodoButton = document.getElementById("button1");
const inputField = document.getElementById("input1");
const todoContainer = document.getElementById("todo-container");

addTodoButton.addEventListener("click", function () {
    var p = document.createElement('p');
    p.innerText = inputField.value;
    todoContainer.appendChild(p);


    // delete todo, if click on paragraph
    p.addEventListener("click", () => {
        todoContainer.removeChild(p)
    })
})