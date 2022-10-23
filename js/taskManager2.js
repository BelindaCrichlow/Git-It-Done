//https://www.youtube.com/watch?v=U693xrQKFy4



//Dom Elements
const taskForm = document.getElementById('task-form');
const taskName = document.getElementById('taskName');
const assignedTo = document.getElementById('assignedTo');
const taskDesc = document.getElementById('taskDesc');
const dueDate = document.getElementById('dueDate');
const submitTask = document.getElementById('submitTask');
let taskID = Math.floor(Math.random() * 10000);
//const delTask = document.getElementById('clearAllTasks')
 const currentDate = new Date;
 
/*class TaskManager{
  constructor(taskName, assignedTo, taskDesc, dueDate) {
    this.taskID = Math.floor(Math.random()*10000)
    this.taskName = taskName; 
    this.assignedTo = assignedTo;
    this.taskDesc = taskDesc;
    thiis.dueDate = dueDate;
  }
  get taskID(){
    return this._taskID;
  }
}*/
//add and display tasks
const addTasks = (taskID, taskName, assignedTo, taskDesc, dueDate) => {
 
  tasks.push({
        taskID,
        taskName,
        assignedTo,
        taskDesc,
        dueDate,
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    return {
        taskID,
        taskName,
        assignedTo,
        taskDesc,
        dueDate,
    };
};

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
 

	//Remove book from local storage
function removeBook(taskID) {
    
   tasks.forEach(function(task, index){
     if(task.textContext === task) {
      tasks.splice(index, 1);
     }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }




 //set tak status
   const taskStatus = (dueDate, currentDate) => {
  if (dueDate.value >= currentDate) {
    document.querySelector(".status").classList.add('.bg-info, .text-light');
    document.querySelector(".status").innerHTML = 'Pending';
    console.log('pending applied')
  } else {
    document.querySelector(".status").classList.add('bg-danger');
    document.querySelector(".status").innerHTML = 'Status: Overdue';
    console.log('task overdue')
  }
}

        
 //create elments  ({ destruting the object})
const createTaskElement = ({taskID, taskName, assignedTo, taskDesc, dueDate}) => {
    const taskList = document.getElementById('taskList')
    const li = document.createElement('li');
  li.classList.add('col-6');
  
  //add the dom 
    li.innerHTML = `
    <div><strong>Task ID:</strong> ${taskID}</div>
    <hr>
     <div><strong>Task:</strong> ${taskName}</div>
     <hr>
      <div><strong>Assigned To:</strong>${assignedTo}</div>
     <hr>
       <div><strong>Task Desc:</strong> ${taskDesc}</div>
     <hr>  
      <div><strong>Due Date:</strong> ${dueDate}</div>
        <hr>
      <div class="status"><strong>Status:</strong> Pending</div>
        <hr>
        <div class="align-content-center">
      <button class="btn btn-primary delete"><a class="delete" href="#">Delete</a></button>
      <button class="btn btn-success"><a class="status" href="#">Pending</a></button>
      </div>
      `;
    
  taskList.appendChild(li);
  

   // tasks.style.display = tasks.style.length === 0 ? "none" : "flex";

};


tasks.forEach(createTaskElement);

//add task to forms
  taskForm.onsubmit = function(e){
    
    e.preventDefault();

 

    const newTask = addTasks(taskID, taskName.value, assignedTo.value, taskDesc.value, dueDate.value);

    createTaskElement(newTask);

    console.log(`The due date is: ${dueDate.value} \nand the currnt date is ${currentDate}`);
   
 
   

    //clear form
    taskID = '';
    taskName.value = '';
    assignedTo.value = '';
    taskDesc.value = '';
    dueDate.value = '';

    taskStatus(dueDate.value, currentDate);

    

    taskList.addEventListener('dblclick', function(){ 		        		
    taskList.removeChild(li);
														 
	});
    
  };
 
taskStatus(dueDate.value, currentDate);
console.log(`\n ${dueDate.value}`)

document.getElementById('taskList').addEventListener('click', function(e){
  e.preventDefault();
     
  removeBook(e.target.parentElement.previousElementSibling.textContent);
  
  
})
  
console.log(removeBook)







  








