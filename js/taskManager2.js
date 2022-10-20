//https://www.youtube.com/watch?v=U693xrQKFy4


//Dom Elements
const taskForm = document.getElementById('task-form');
const taskName = document.getElementById('taskName');
const assignedTo = document.getElementById('assignedTo');
const taskDesc = document.getElementById('taskDesc');
const dueDate = document.getElementById('dueDate');
const submitTask = document.getElementById('submitTask');
const taskID = Math.floor(Math.random() * 10000);
 const deletAll = document.getElementById('clearAllTasks')





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

//remove task from list
 function deleteBook(e) {
    if(e.target.className === 'delete') {
      e.target.parentElement.parentElement.remove();
    }
  }








//remove tasks from storage
const removeTask = (taskID) => {
    const tasks = addTasks();

    tasks.forEach(function(task, index){
     if(taskID) {
      tasks.splice(index, 1);
     }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
        
        
 //create elments  ({ destruting the object})
const createTaskElement = ({taskID, taskName, assignedTo, taskDesc, dueDate}) => {
    const taskList = document.getElementById('taskList')
    const li = document.createElement('li');
    li.classList.add('col-6');
   
  //add the dom 
    li.innerHTML = `
    <div>Task ID: ${taskID}</div
     <div><span>Task:<span> ${taskName}</div>
      <div><span>Assigned To:</span> ${assignedTo}</div>
       <div><span>Task Desc:</spann> ${taskDesc}</div>
      <div><span>Due Date:</span> ${dueDate}</div>
      <div class="pending">Status: Pending</div>
      <button class="btn btn-success delete"> Delete</button> 
      `;
    
    taskList.appendChild(li);

   // tasks.style.display = tasks.style.length === 0 ? "none" : "flex";

};


tasks.forEach(createTaskElement);

//add task to forms
    //taskForm.onsubmit = (e) => {
    
submitTask.addEventListener('click', function (e) {
     e.preventDefault();
    const newTask = addTasks(taskID, taskName.value, assignedTo.value, taskDesc.value, dueDate.value);

    createTaskElement(newTask);
    
   
    //clear form
    taskName.value = '';
    assignedTo.value = '';
    taskDesc.value = '';
    dueDate.value = '';


   
});

//event listener to remove bood
submitTask.addEventListener('click', function (e) {

     const newTask = addTasks(taskID, taskName.value, assignedTo.value, taskDesc.value, dueDate.value);

    deleteTask(e.target)

    removeTask(e.target.parentElement.previousElementSibling.textContent);

  // Show message
  //ui.showAlert('Book Removed!', 'success');

  e.preventDefault();

});