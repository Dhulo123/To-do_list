const inputbox=document.getElementById("input");
const listTask=document.getElementById("list");

const shortcut =document.querySelector("add");


function addtask(){
    if(inputbox.value !== ''){
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listTask.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);  
    }
        
    else{
        alert("Please enteryour task");
    }
        
    
    inputbox.value = "";

    
}
document.addEventListener('keydown',(ea)=>{
    if(ea.shiftKey && ea.ctrlKey){
        addtask();
    }
});

listTask.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
}, false);

let isFullScreen=false;


