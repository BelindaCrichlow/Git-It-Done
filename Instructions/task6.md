Task 6: Display The Tasks

Description

For this task, we'll be writing the code to display the TaskManager's tasks array on the page.

Walkthrough

Step 1: Using Javascript to Create the Task HTML

Useful Resources for this step

Template literals (Template strings)
In this step, we'll create a function using template literals to return the HTML for each individual task.

In js/taskManager.js, above the TaskManager class definition, create a new function, createTaskHtml. The function should accept the following parameters:

name
description
assignedTo
dueDate
status
Hint: Try using an arrow function!

Within the createTaskHtml function, create a string using template literals, copying the HTML of a single task from the index.html

For example:

const html = `
    <li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>Take out trash</h5>
            <span class="badge badge-danger">TODO</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: Nick</small>
            <small>Due: 20/09/2020</small>
        </div>
        <p>Take out the trash to the front of the house</p>
    </li>
`
Using the template literal placeholders (${}), replace each section of the task HTML with the correct parameter

Return the HTML from the function

Test Your Code!

Now is a good chance to test your code, head over to js/index.js and do the following

Create a taskHtml variable with the result of calling the createTaskHtml function, making sure to pass a value for each parameter.
console.log() the taskHTML variable
Expected Result You should see HTML for the task in the console, for example:

<li class="list-group-item">
  <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
      <h5>Take out trash</h5>
      <span class="badge badge-danger">TODO</span>
  </div>
  <div class="d-flex w-100 mb-3 justify-content-between">
      <small>Assigned To: Nick</small>
      <small>Due: 20/09/2020</small>
  </div>
  <p>Take out the trash to the front of the house</p>
</li>
Step 2: The render method

Useful Resources for this step

Loops and iteration
Date
Array.push()
Array.join()
Document.querySelector
To display the tasks, we'll be creating a new method on our TaskManager class called render.

"Render" is a term used in computer science that means to "create a visual reference of". In this step, we are rendering our tasks, so that they are visible on the page.

We can mostly rely on the data stored for each task in the TaskManager's tasks property to display the task nicely on the page. The one change we will need to make is to format the dueDate of the task so that it is human-readable. To do this, we'll be using JavaScript's Date object.

In js/taskManager.js, within the TaskManager class, create a render() method. This method does not need any parameters.

Create a variable storing an empty array to hold the HTML of all the tasks' html, tasksHtmlList.

Loop over the TaskManager's tasks, for each task:

Store the current task in a variable

Create a date variable, storing a new Date(), passing in the current task's dueDate to the Date constructor.

Create a formattedDate variable, storing a readable string representing the date, using methods of the date we just created.

Hint: Use MDN's Date reference to see what methods are available to format a date. Build a string using string concatenation or template literals. Check the example/taskManager.js to see how it can be done if you get stuck.

Create a taskHtml variable to store the HTML of the current task, by calling the createTaskHtml function and using the properties of the current task, as well as the new formattedDate variable for the parameters.

push the taskHtml into the tasksHtmlList array.

After looping through each task, create a tasksHtml variable, set the variable to a string of HTML of all the tasks by joining the tasksHtmlList array together, separating each task's html with a newline.

Hint: \n can be used to represent a newline.

Make sure the tasks list in index.html has an id so it can be selected.

Select the tasks list element and set its innerHTML to the tasksHtml.

Step 3: Calling render

Useful Resources for this step

EventTarget.addEventListener()
Now that the TaskManager class has a render() method, we need to make sure to call it each time a new task is added, so that it is rendered to the page!

In js/index.js, in the event listener for the submit event on the New Task form, find the call to the TaskManager's addTask.

After addTask is called, call the TaskManager's render method.

Results

Go ahead and open index.html in the browser and add some tasks using the form. You should see each new task populate the task list!

Your task should meet the assesment criteria in the Final Project - Scorecard Rubric.