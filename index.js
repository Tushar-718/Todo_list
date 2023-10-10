let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let warning = document.getElementById("warning");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener('submit', (e) => {
    // to prevent refresh
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if (textInput.value === "") {
        console.log("failure");
        warning.innerHTML = "Task cannot be blank";
    } else {
        console.log("Success");
        warning.innerHTML = "";
        acceptData();
        add.setAttribute("data-bs-dismiss","modal");
        add.click();
        (()=>{
            add.setAttribute("data-bs-dismiss","");
        })()
    }
}


// accept task from user 
let data = {};

let acceptData = () => {
    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["description"] = textarea.value;
    createTasks();
};


// displaying task on browser
let createTasks = () => {
    // + is used so that old tasks get concatenated to new task
    tasks.innerHTML += `            
    <div>
    <span class="fw-bold">${data.text}</span>
    <span class="small text-secondary fw-bold">${data.date}</span>
    <p>${data.description}</p>
    <span class="options">
        <button onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="e_button" type="button">Edit</button>
        <button onClick="deleteTask(this)" class="d_button" type="button">Delete</button>
    </span>
    </div>`;
    resetForm();
};


// reseting of form
let resetForm=()=>{
    textInput.value="";
    dateInput.value="";
    textarea.value="";
}

// deleting the task
let deleteTask = (e)=>{
    e.parentElement.parentElement.remove();
}


// updating the task
let editTask =(e)=>{
    let selectedTask = e.parentElement.parentElement;
    textInput.value=selectedTask.children[0].innerHTML;
    dateInput.value=selectedTask.children[1].innerHTML;
    textarea.value=selectedTask.children[2].innerHTML;
    selectedTask.remove();
}