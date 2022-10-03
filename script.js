window.addEventListener('load', () =>
{
    const form = document.querySelector("#tasks-form");
    const input = document.querySelector("#new-task");
    const  elements = document.querySelector("#tasks");

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const task = input.value;
        if(!task)
        {
            alert("Please add a task!");
            return ;
        }
        const element = document.createElement("div");
        element.classList.add("task");
        
        const todo = document.createElement("div");
        todo.classList.add("content");
      
        element.appendChild(todo);
 
        const inside = document.createElement("input");
        inside.classList.add("text");
        inside.type = "text";
        inside.value = task;
        inside.setAttribute("readonly", "readonly");

        todo.appendChild(inside);

        const add = document.createElement("div");
        add.classList.add("add-it");

        const addEdit = document.createElement("button");
        addEdit.classList.add("edit");
        addEdit.innerHTML = "Edit";

        const addDelete = document.createElement("button");
        addDelete.classList.add("delete");
        addDelete.innerHTML = "Delete";
        
        add.appendChild(addEdit);
        add.appendChild(addDelete);

        element.appendChild(add);
        elements.appendChild(element);
        input.value = "";
    })
})