
const form = document.getElementById('task-form');
const taskName = document.getElementById('taskName');
const assignedTo = document.getElementById('assignedTo');
const taskDesc = document.getElementById('taskDesc');
const dueDate = document.getElementById('dueDate"');

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


form.addEventListener('submit', function(e){
	console.log(taskName.value)
	e.preventDefault()
	
	if(taskName.value === ''){
		showError(taskName, 'Task name required');
	} else {
		showSuccess(taskName);
	}
})
