import { HasOutput } from "../interfaces/HasOutput";

export class ItemTemplate {
  constructor(private container: HTMLUListElement) {}
  render(item: HasOutput, date: string, tasks: HasOutput[]) {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.innerText = date;
    li.append(h4);
    const p = document.createElement("p");
    p.innerText = item.output();
    li.append(p);
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener("click", () => {
      const liToDelete = button.closest("li")!;
      liToDelete.remove();
    });
    li.append(button);
    this.container.append(li);
  }
}
