const inputBox = document.getElementById("input-box");
const addButton = document.getElementById("add-button");
const listContainer = document.getElementById("list-container");

function addTask(){
    const taskText = inputBox.value.trim();

    if(taskText === ""){
        alert("Ямар нэг зүйл бич!");
        inputBox.focus();
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const span = document.createElement("span");
    span.setAttribute("aria-label", "Устгах");
    li.appendChild(span);

    listContainer.appendChild(li);
    inputBox.value = "";
    inputBox.focus();
    saveData();
}

addButton.addEventListener("click", addTask);

inputBox.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("todo-data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("todo-data") || "";
}

showTask();
