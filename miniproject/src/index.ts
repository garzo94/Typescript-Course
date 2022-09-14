const btn = document.getElementById("btn")! // When iam sure that exist I can tak question mark off
const input = document.getElementById("todoinput")! as HTMLInputElement;
const list = document.getElementById("todolist")!

btn.addEventListener("click", function(){
    input.value
})

// Assertions
let mystery: unknown = "Hello world!!"

const numChars = (mystery as string).length

// Events

const form = document.querySelector("form")!
form.addEventListener("submit", function(e){
    e.preventDefault();
    const newTodo = input.value
    const newLi = document.createElement("li")
    const checkbox = document.createElement("input")
    checkbox.type = 'checkbox'
    newLi.append(newTodo)
    newLi.append(checkbox)
    list.append(newLi)

    input.value = ""
})