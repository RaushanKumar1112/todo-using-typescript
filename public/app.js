import { Work } from "./classes/Work.js";
import { ItemTemplate } from "./classes/ItemTemplate.js";
const form = document.querySelector(".item-List");
const arr = document.querySelector("#event");
const ul = document.querySelector(".addEvents");
const instance = new ItemTemplate(ul);
let tasks = [];
let i = 0;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let task = new Work(arr.value);
    tasks.push(task);
    console.log(tasks);
    while (i < tasks.length) {
        instance.render(task, new Date().toLocaleString(), tasks);
        i++;
    }
    arr.value = "";
});
