class Task {
  constructor(taskName, assignedTo, taskDesc, dueDate, taskID) {
    this.taskName = taskName;
    this.assignedTo = assignedTo;
    this.taskDesc = taskDesc;
    this.dueDate = dueDate;
    this.taskID = taskID;
    
  }
  
}

class UI {
  addTaskToList(task){
    const taskList = document.getElementById('taskList');
    // Create li element
    const li = document.createElement('li');
    li.classList.add('col-6');
    
  //<div>${task.taskID}
    // Insert tasks
    li.innerHTML = `
      
    <div><strong>Task ID:</strong> ${task.taskID}</div>
      <hr>
      <div><strong>Task: </strong>${task.taskName}</div>
      <hr>
      <div><strong>Owner: </strong>${task.assignedTo}</div>
      <hr>
      <div><strong>description: </strong>${task.taskDesc}</div>
      
       <hr>
      <div><strong>Due Date: </strong>${task.dueDate}</div>
      <hr>
      <button class="btn btn-success"><a href="#" class="delete">Delete<a></button>
      <button class="btn btn-success"><a class="status" href="#">Pending</a></button>
    `;
  
    taskList.appendChild(li);
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

  //delete task
  deleteTask(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  
  
  clearFields() {
    //task.taskID = '';
 
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

    tasks.forEach(function(task, index){
     if(task.taskID === taskID) {
      tasks.splice(index, 1);
     }
    });

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
    taskID = Math.floor(Math.random()*10000)


  // Instantiate task
  const task = new Task( taskID,taskName, assignedTo, taskDesc, dueDate);

  // Instantiate UI
  const ui = new UI();

  console.log(ui);

  // Validate
  if(taskName === '' || assignedTo === '' || taskDesc === '' || dueDate === '') {
    // Error alert
    showAlert('Please fill in all fields', 'error');
  } else {
    // Add task to list
   ui.addTaskToList(task);

    // Add to LS
    Store.addTask(task);

    // Show success
    ui.showAlert('Task Added!', 'success');
  
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
document.getElementById('taskList').addEventListener('click', function(e){

  // Instantiate UI
  const ui = new UI();

  // Delete task
  ui.deleteTask(e.target);

  // Remove from LS
  Store.removeTask(e.target.parentElement.previousElementSibling.textContent);

  // Show message
  ui.showAlert('Task Removed!', 'success');

  e.preventDefault();
});
