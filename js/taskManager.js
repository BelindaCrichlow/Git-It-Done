//https://dev.to/desoga/club-roster-application-with-vanilla-javascript-12ci



class Task {
  constructor(taskID, taskName, assignedTo, taskDesc, dueDate) {
    this.taskID = taskID;
    this.taskName = taskName;
    this.assignedTo = assignedTo;
    this.taskDesc = taskDesc;
    this.dueDate = dueDate;
  }
}

class UI {
  addTaskToList(task){
    const taskList = document.getElementById('taskList');
    // Create li element
    const li = document.createElement('li');
    li.classList.add('col-sm-6');
    
  //<div>${task.taskID}
    // Insert tasks
    li.innerHTML = `
      
    <div><strong>Task ID:</strong> ${task.taskID}</div>
      <hr>
      <div><strong>Task: </strong>${task.taskName}</div>
      <hr>
      <div><strong>Owner: </strong>${task.assignedTo}</div>
      <hr>
      <div><strong>Description: </strong>${task.taskDesc}</div>
      
       <hr>
      <div><strong>Due Date: </strong>${task.dueDate}</div>
      <hr>
     <div><strong>Status: </strong><span class="status">Pending</span></div>
      <hr>
      
      <button class="btn btn-success" id="delete"><a href="#" class="delete">Delete<a></button>
   
    `;
  
    taskList.appendChild(li);



  }

   //delete task
  deleteTask(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
      
    }
  }
//alert section--form validation
  showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container2');
    // Get form
    const form = document.querySelector('#task-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }


//set task status

  /*taskStatus(dueDate) {
    let currentDate = new Date();
  if (dueDate.value >= currentDate) {
    document.querySelector(".status").classList.add('.bg-info, .text-light');
    document.querySelector(".status").innerHTML = 'Pending';
    console.log('pending applied')
  } else {
    document.querySelector(".status").classList.add('bg-danger');
    document.querySelector(".status").innerHTML = 'Status: Overdue';
    console.log('task overdue')
  }
}*/



 

  
  
  clearFields() {
    //taskID = '';
   document.getElementById('taskID').value = '';
    document.getElementById('taskName').value = '';
    document.getElementById('assignedTo').value = '';
    document.getElementById('taskDesc').value = '';
    document.getElementById('dueDate').value = '';
   
  }
}

// Local Storage Class
class Store {
  static getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    return tasks;
  }

  static displayTasks() {
    const tasks = Store.getTasks();

    tasks.forEach(function(task){
      const ui  = new UI;

      // Add task to UI
      ui.addTaskToList(task);
    });
  }

  static addTask(task) {
    const tasks = Store.getTasks();

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static removeTask(taskID) {
    const tasks = Store.getTasks();

    tasks.forEach(function (task, index) {
      console.log(index)
      console.log('task: ', task)
        console.log(`TaskID ${taskID} and task.taskID: ${task.taskID},`)
      if (task.taskID === taskID) {
      tasks.splice(index, 1);
     }
    });
    console.log(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayTasks);

// Event Listener for add task
document.getElementById('task-form').addEventListener('submit', function(e){
  // Get form values
  const taskName = document.getElementById('taskName').value,
    assignedTo = document.getElementById('assignedTo').value,
    taskDesc = document.getElementById('taskDesc').value,
    dueDate = document.getElementById('dueDate').value,
    taskID = document.getElementById('taskID').value
  
  /*const setTaskIDValue = () => {
    var num = Math.floor((Math.random() * 10000))
    document.getElementById('taskID').value(num);
  }
    
  //setTaskIDValue();>*/


  // Instantiate task
  const task = new Task(taskID, taskName, assignedTo, taskDesc, dueDate);

  // Instantiate UI
  const ui = new UI();

 
  console.log(ui);

  // Validate
  if(taskName === '' || assignedTo === '' || taskDesc === '' || dueDate === '' || taskID === '') {
    // Error alert
    showAlert('Please fill in all fields', 'error');
  } else {
    // Add task to list
   ui.addTaskToList(task);

    // Add to LS
    Store.addTask(task);
   console.log(`TaskID ${taskID} and task.taskID: ${task.taskID},`)
     //Store.displayTasks()
    // Show success
    ui.showAlert('Task Added!', 'success');
    
    //ui.taskStatus(dueDate.value);
   
    //ui.taskStatus(task.dueDate);
    // Clear fields
    ui.clearFields();
  }

  //console.log(dueDate.value);
  e.preventDefault();
});



// Event Listener for delete
document.getElementById('taskList').addEventListener('click', function(e){

  // Instantiate UI
  const ui = new UI();

  // Delete task
  ui.deleteTask(e.target);
  
  console.log('weird code:', e.target.parentElement.previousElementSibling)
  // Remove from LS
  Store.removeTask(e.target.parentElement.previousElementSibling.textContent);
  
  ui.showAlert('Task Removed!', 'success');

  e.preventDefault();
});
