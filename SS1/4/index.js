const addTask = document.getElementById("add-new-task");
addTask.addEventListener("click", () => {
    const new_task = document.getElementById("new-task");
    const li = document.createElement("li");
    li.innerHTML = new_task.value;
    const ul = document.getElementsByClassName("collection");
    // li.setAttribute("class", "collection-item");
    ul[0].appendChild(li);
    const button1 = document.createElement("button");
    button1.innerHTML = "delete";
    li.appendChild(button1);
    button1.addEventListener("click", () => {
        li.remove();
    })
    const edit = document.createElement("button");
    edit.innerHTML = "edit";
    li.appendChild(edit);
    edit.addEventListener("click", () => {
        li.innerHTML="";
        const li1 = document.createElement("li");
        li1.innerHTML=new_task.value;
        const ul = document.getElementsByClassName("collection");
        ul[1].appendChild(li);
        
    })
})