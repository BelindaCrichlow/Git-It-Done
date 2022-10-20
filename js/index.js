const form = document.getElementById('task-form');
const taskName = document.getElementById('taskName');
const assignedTo = document.getElementById('assignedTo');
const taskDesc = document.getElementById('taskDesc');
const dueDate = document.getElementById('dueDate');
const submitTask = document.getElementById('submitTask');
const taskList = document.getElementById('taskList')


//FORM VALIDATION
//showinput errors
function showError(input, message){
	const formGroup = input.parentElement;
	formGroup.className = 'form-group error';
	let small = formGroup.querySelector('small');
	small.innerText = message;
	
	
}
function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = 'form-group success';
}

//add task to list
form.addEventListener('submit', function(e){
	console.log(taskName.value)
	e.preventDefault()
	
	if(taskName.value === '' || assignedTo.value === '' || taskDesc === '' || dueDate === ''){
		showError(taskName, 'Task name required');
	} else {
		showSuccess(taskName);
	}
});



//ADD TASKS TO THE TASK LIST
submitTask.addEventListener('click',function(){
  let listItem = document.createElement('li');
   listItem.innerHTML = `
     <div><h4>Task<h4>: ${taskName.value}</div>
      <div><h4>Assigned</h4> To: ${assignedTo.value}</div>
       <div><h4>Task Desc</h4>: ${taskDesc.value}</div>
      <div><h4>Due Date</h4>: ${dueDate.value}</div>
      <div class="pending">Status: Pending</div>
      `;
  taskList.appendChild(listItem);
  
  taskName.value = '';
  assignedTo.value = '';
  taskDesc.value = '';
  dueDate.value = '';

  /*
	///add a line throuh the test
	listItem.addEventListener('click', function(){ 		        		
    paragraph.style.textDecoration = 'line-through';
																 
	});*/
	
//delete task
	listItem.addEventListener('dblclick', function(){ 		        		
    taskList.removeChild(listItem);
    
																 
	});
  
  
})