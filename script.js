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


let data ={}
function acceptData(){
  data["text"] = textInput.value;
  data["date"] = dateInput.value;
  data["description"] = taskArea.value;
  console.log(data);
  createTasks()
}
function createTasks(){
  taskEvents.innerHTML +=`
  <div>
    <span>${data.text}</span><br><br>
      <span>${data.date}</span><br><br>
        <p>${data.description}</p><br>
          <span class="options">
              <ion-icon name="create-outline" onClick="updateTask(this)"></ion-icon>
              <ion-icon name="trash-outline" onClick="deleteTask(this)"></ion-icon>
          </span>

  </div>`          
  resetForm();
}
let deleteTask=(e)=>{
e.parentElement.parentElement.remove();
}

let updateTask=(e)=>{
  let selectedTask=e.parentElement.parentElement;
  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  taskArea.value = selectedTask.children[2].innerHTML;
  };


function resetForm(){
  textInput.value="";
  dateInput.value="";
  taskArea.value="";
};