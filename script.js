const task=document.querySelector("#task");
const addbtn=document.querySelector("#addbtn");
const tasksbox=document.querySelector("#tasksbox");

addbtn.addEventListener("click",function(){
    const p=document.createElement("p");
    p.innerText=task.value;
    tasksbox.appendChild(p);
    task.value='';
   
})
task.addEventListener("keypress",function(evt){
    if(evt.code=="Enter"){
        addtoDom();
    }
})
function addtoDom (){
    const div =document.createElement("div");
    const p=document.createElement("span");
    p.innerText=task.value;
    div.appendChild(p);
    tasksbox.appendChild(div);
    task.value='';
    const chk=document.createElement("input");
    chk.setAttribute("type","checkbox");
    div.appendChild(chk);
    chk.addEventListener("click",function(){
        if (chk.checked==true){
            p.style.textDecoration="line-through";}
         else{
            p.style.textDecoration="none"
 } })

    const delbutton=document.createElement("button");
    delbutton.innerText="del";
    
     delbutton.addEventListener("click",function(){
         div.remove();
     }) 
    // function deletehandler(evt){
    //     evt.target.parentnode.remove();
    // }
    div.appendChild(delbutton);
    

    

}