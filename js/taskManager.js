//Implementing  javascript function to validate form fields.
//Create the task class
class TaskManager {
  constructor(taskName, taskDesc, assignedTo, dueDate){
      this.tasks= [];
      this.taskName = taskName;
      this.taskDesc = taskDesc;
      this.assignedTo = assignedTo;
      this.dueDate = dueDate;
  }
  
};

class UI {
    addTaskToList(task) {
        const taskList = document.getElementById('taskList');
        // Create tr element
        const listItem = document.createElement('li');
        // Insert cols
      listItem.innerHTML = `
        
      <h1>Task ${task.index}: ${task.taskName}</h1>
      <p>Assigned To: ${task.taskDesc}</p>
      <p>Description <br> ${task.assignedTo}</p>
      <p>Due Date: ${task.dueDate}</p>

      <div><a href="#" class="delete">X<a></div>`;
  
        taskList.appendChild(listItem);
    }
}

//Alert Section

//Delete Section
  /*deleteTask(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
}
  //
  clearFields() {
    document.getElementById('taskName').value = '';
    document.getElementById('taskDesc').value = '';
    document.getElementById('assignedTo').value = '';
    document.getElementById('dueDate').value = '';
  }
}*/

//Local Storage Class
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
   static removeTasks(assignedTo) {
    const tasks = Store.getTasks();

    tasks.forEach(function(tasks, index){
     if(tasks.assignedTo === assignedTo) {
      tasks.splice(index, 1);
     }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

  //EventListener  DOMLoader event
  document.addEventListener('DOMContentLoaded',     
  Store.displayTasks);


  // Event Listener for add task
document.getElementById('task-form').addEventListener('submit', function(e){
  
  // Get form values
  const taskName = document.getElementById('taskName').value;
  const taskDesc = document.getElementById('taskDesc ').value;
  const assignedTo = document.getElementById('assignedTo').value;
  const dueDate = document.getElementById('dueDate').value;

  // Instantiate task
  //New task manager instance; all things inherited from task manager
  const task = new TaskManager(taskName, taskDesc, assignedTo, dueDate);

  // Instantiate task UI
  const ui = new UI();

  console.log(ui);

  // Validate alert sectionn
  if(taskName === '' || taskDesc === '' || assignedTo === '' || dueDate === '') {
    
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
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
