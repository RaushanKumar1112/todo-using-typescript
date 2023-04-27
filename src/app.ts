import { HasOutput } from "./interfaces/HasOutput";
import { Work } from "./classes/Work.js";
import { ItemTemplate } from "./classes/ItemTemplate.js";

const form = document.querySelector(".item-List") as HTMLFormElement;
const arr = document.querySelector("#event") as HTMLSelectElement;
const ul = document.querySelector(".addEvents") as HTMLUListElement;
const instance = new ItemTemplate(ul);

let tasks: HasOutput[] = [];
let i = 0;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let task: HasOutput = new Work(arr.value);
  tasks.push(task);
  console.log(tasks);
  while (i < tasks.length) {
    instance.render(task, new Date().toLocaleString(), tasks);
    i++;
  }
  arr.value = "";
});
