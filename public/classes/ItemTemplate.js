export class ItemTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, date, tasks) {
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
            const liToDelete = button.closest("li");
            liToDelete.remove();
        });
        li.append(button);
        this.container.append(li);
    }
}
