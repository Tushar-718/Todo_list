let form= document.getElementById("form");
let textInput= document.getElementById("textInput");
let warning= document.getElementById("warning");
let dateInput= document.getElementById("dateInput");
let textarea= document.getElementById("textarea");

 form.addEventListener('submit', (e)=>{
    e.preventDefault();
    formValidation();
 });

 let formValidation =() =>{
    if(textInput.value === ""){
        console.log("failure");
        warning.innerHTML = "Task cannot be blank";
    }
    else{
        console.log("Success");
        warning.innerHTML = "";
    }
 }

 let data ={};

 let acceptData =() =>{
    
 };