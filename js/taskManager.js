//Implementing  javascript function to validate form fields.
//Create the task class
class TaskManager {
  constructor(taskName, taskDesc, assignedTo, dueDate){
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
        <div>${task.taskName}</div>
      <div>${task.taskDesc}</div>
      <div>${task.assignedTo}</div>
      <div>${task.dueDate}</div>

      <div><a href="#" class="delete">X<a></div>`;
  
        taskList.appendChild(listItem);
    }
}
