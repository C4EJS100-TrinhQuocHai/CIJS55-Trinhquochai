const add_task=document.getElementById("add_task");
add_task.addEventListener("click",()=>{
    const list_task=document.getElementById("list_task");
    const li=document.createElement("li");
    li.innerHTML=list_task.value;
    const ul =document.getElementsByClassName("list_li");
    ul[0].appendChild(li);
})