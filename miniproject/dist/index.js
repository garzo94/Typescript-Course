"use strict";
var btn = document.getElementById("btn"); // When iam sure that exist I can tak question mark off
var input = document.getElementById("todoinput");
var list = document.getElementById("todolist");
btn.addEventListener("click", function () {
    input.value;
});
// Assertions
var mystery = "Hello world!!";
var numChars = mystery.length;
// Events
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var newTodo = input.value;
    var newLi = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    newLi.append(newTodo);
    newLi.append(checkbox);
    list.append(newLi);
    input.value = "";
});
