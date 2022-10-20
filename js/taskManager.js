//Implementing  javascript function to validate form fields.
//Create the task class
const submitTask = document.getElementById('submitTask');




//Implementing  javascript function to validate form fields.
//Create the task class
class Task {
  constructor(taskName, assignedTo, taskDesc, dueDate) {
    this.taskName = taskName;
    this.assignedTo = assignedTo;
    this.taskDesc = taskDesc;
    this.taskDesc = dueDate;
    
  }
  static taskID(){
    const generateTaskID = Math.floor(Math.random()*10000);
    return generateTaskID;
  }
    
  }


class UI {
  addTaskToList(task) {
    const taskList = document.getElementById('taskList');
    // Create li element
    const li = document.createElement('li');
    const taskID = Math.floor(Math.random()* 10000)
  // <div>${taskID}<div>
  
    // Insert list items
    li.innerHTML = `
     <div>${Task.taskID}</div>
      <div>${task.taskName}</div>
      <div>${task.assignedTo}</div
      <div>${task.taskDesc}</div>
      <div>${task.taskDesc}</div>
      <div>Task Status: Pending</div>
      <button><a href="#" class="delete">Delete Task<a></button>
    `;
  
    taskList.appendChild(li);
  }

//alert section--form validation
//alert section--form validation
  /*showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#task-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }
*/
  
  //delete task
  
  /*deleteTask(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }*/
  /*
  
  listItem.addEventListener('dblclick', function(){ 		        		
    taskList.removeChild(listItem);
																 
	});*/

  
  clearFields() {
    taskName.value = '';
    assignedTo.value = '';
    taskDesc.value = '';
    dueDate.value = '';
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

  static removeTask(taskId) {
    const tasks = Store.Tasks();

    tasks.forEach(function(task, index){
     if(task.taskId === taskId) {
      tasks.splice(index, 1);
     }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayTasks);

// Event Listener for task book
document.getElementById('task-form').addEventListener('click', function(e){
  // Get form values
  /*const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value*/

  const taskName = document.getElementById('taskName').value;
  const assignedTo = document.getElementById('assignedTo').value;
  const taskDesc = document.getElementById('taskDesc').value;
  const dueDate = document.getElementById('dueDate').value;
  const taskID = Math.floor(Math.random()* 10000);

  // Instantiate task
  const task = new Task(taskName, assignedTo, taskDesc, dueDate);

  // Instantiate UI
  const ui = new UI();

  console.log(ui);

  // Validate
  if(taskName === '' ||assignedTo === '' || taskDesc === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add task to list
    ui.addTaskToList(task);

    // Add to LS
    Store.addTaskk(task);

    // Show success
    ui.showAlert('Task Added!', 'success');
  
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
submitTask.addEventListener('click', function(e){

  // Instantiate UI
  const ui = new UI();

  // Delete task
  ui.deleteTask(e.target);

  // Remove from LS
  //Store.removeTask(e.target.parentElement.previousElementSibling.textContent);

  // Show message
  //ui.showAlert('Task Removed!', 'success');

  e.preventDefault();
});