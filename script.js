const taskForm=document.getElementById("taskForm");
const textInput=document.getElementById("textInput");
const dateInput=document.getElementById("dateInput");
const taskArea=document.getElementById("taskArea");
const msg=document.getElementById("msg");
const taskEvents=document.getElementById("taskEvents");




taskForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log('clicked');
  formValidation();
});

function formValidation(){
  if(textInput.value ===""){
    console.log('failure');
  }
  else{
    console.log('success');
    acceptData();
  }
  msg.innerHTML="";
};


let data = [{}];


let acceptData=()=>{
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: taskArea.value,
  });
  localStorage.setItem("data",JSON.stringify(data));
  console.log(data);
  createTasks();
}

function createTasks(){
  taskEvents.innerHTML= "";
  data.map((x,y)=>{
    return (taskEvents.innerHTML +=`
    <div id=${y}>
      <span>${x.text}</span><br><br>
        <span>${x.date}</span><br><br>
          <p>${x.description}</p><br>
            <span class="options">
                <ion-icon name="create-outline" id= "taskForm" onClick="updateTask(this)"></ion-icon>
                <ion-icon name="trash-outline" createTasks() onClick="deleteTask(this)"></ion-icon>
            </span>
  
    </div>`
    );          
  })
  
  resetForm();
}
let deleteTask=(e)=>{
e.parentElement.parentElement.remove();
data.splice(e.parentElement.parentElement.id, 1);
localStorage.setItem("data",JSON.stringify(data));
console.log(data);
}

let updateTask=(e)=>{
  let selectedTask=e.parentElement.parentElement;
  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  taskArea.value = selectedTask.children[2].innerHTML;
  
  deleteTask(e);
  };


function resetForm(){
  textInput.value="";
  dateInput.value="";
  taskArea.value="";
};

(()=>{
  data = JSON.parse(localStorage.getItem("data")) || [];
  createTasks();
})()