
//create the task class
class Task {
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

      <td><a href="#" class="delete">X<a></td>
    `;
  
        taskList.appendChild(listItem);
    }
}