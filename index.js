const inputBox= document.getElementById("input");
const listContainer =document.getElementById("list-container");
function addTask(){
   event.preventDefault();
    if(inputBox.value===''){
        alert("Add a task to the list");
    }
    else{
        let li =document.createElement("li");
       li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
       span.innerHTML="\u00d7";
       li.appendChild(span);
    }
    inputBox.value='';
    
}


listContainer.addEventListener("click",function(e){
    
     if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        
    }
},false);

