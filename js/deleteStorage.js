function removeTasksFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('task') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach((task, index) => {
    if (taskID.textContent === taskID) {
      tasks.splice(index, 1);
    }
  })
   localStorage.setItem('tasks', JSON.stringify(tasks))
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
     


   function removeTasksFromLocalStorage(tasks) {
  
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach((taskID, index) => {
    if (taskID.textContent === taskID) {
      tasks.splice(index, 1);
    }
  })
   localStorage.setItem('tasks', JSON.stringify(tasks))
}