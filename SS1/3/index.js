const addTask = document.getElementById("add-new-task");
addTask.addEventListener("click", () => {
  const new_task = document.getElementById("new-task");
  const li = document.createElement("li");
  li.innerHTML = new_task.value;// delete
  li.setAttribute("class", "collection-item");
  const ul = document.getElementsByClassName("collection");
  ul[0].appendChild(li);
  //add button
  const button = document.createElement("button");
  button.innerHTML = "Delete";
  button.setAttribute("class", "btn");
  li.appendChild(button);
  //add event
  button.addEventListener("click", () => {
    //li.innerHTML="";
    li.remove();
  })
  const edit = document.createElement("button");
  edit.innerHTML = "edit";
  li.appendChild(edit);
  edit.addEventListener("click", () => {
    li.innerHTML = "";
    const li1 = document.createElement("li");
    li1.innerHTML = new_task.value;
    const ul = document.getElementsByClassName("collection");
    ul[0].appendChild(li);
  })
  const deleteAll = document.getElementById("delete-all");
  deleteAll.addEventListener("click", () => {
    const ul = document.getElementsByClassName("collection");
    ul[0].innerHTML = "";})
    // call back 
  })