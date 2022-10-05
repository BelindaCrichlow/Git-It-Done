Task 7: Update A Task

Description

For this task, we'll write the code to update a task's status to "DONE" once a "Mark As Done" button on the task is clicked.

Note, for this task, we are not using the "Update Task" form. This is part of the re-structuring of the project. This step will be added as a stretch goal to the end of the course.

Walkthrough

Step 1: Adding the "Mark As Done" button

Useful Resources for this step

Bootstrap - Buttons
In this step, we'll add a "Mark As Done" button to the tasks, so that a user can click the button to mark that specific task as done.

In js/taskManager.js, within the createTaskHtml function, add a button to the task html to mark the task as done.
Add a 'done-button' class to the "Mark As Done" button. We'll use this later to check if the button has been clicked.
Test Your Code!

Now is a good chance to test your code, open index.html in the browser and create a new task using the form.

Expected Result You should see your tasks now have a "Mark As Done" button.
Step 2: Adding an Event Listener to the Task List

Useful Resources for this step

EventTarget.addEventListener()
Document.querySelector
Event.eventTarget
Element.classList
DOM Traversal
Node.parentElement
In this step, we'll add an Event Listener to our Task List, so that we can check if one of our Task's buttons is clicked.

Note that we're not adding an Event Listener to the "Mark As Done" buttons, this is because instead of adding Event Listener's to each "Mark As Done" button, we can add a singular Event Listener to the Task List and use DOM Traversal to find the Task that was clicked. DOM Traversal is the act of using code to traverse up and down the DOM Tree to find a specific DOM Element.

This way, we can avoid having to add Event Listeners to each and every "Mark As Done" button on the page.

Make sure the Task List in index.html has an id you can use to select it, I went with tasksList.

In js/index.js, at the bottom of the file, use querySelector to select the Task List and store it in a variable.

Add an Event Listener to the Task List, listening for the 'click' event.

In the Event Handler, we'll need to take the event parameter.

For example:

tasksList.addEventListener('click', (event) => { // "event" here is the event parameter

});
Using the event.target, using an if statement, check if the target's classList contains the class we added to the button, 'done-button'. If the classList contains 'done-button', we know we clicked on the "Mark As Done" button from earlier!

Use DOM Traversal, such as the parentElement property of the target (Node.parentElement) to traverse the DOM and find the task's element. (Eg, it's <li>). Store the <li> in a parentTask variable.

Test Your Code!

Now is a good chance to test your code, open js/index.js and do the following:

Directly after the code that traverses the DOM to find the parentTask, console.log() the parentTask.
Open index.html in the browser.
Create a new task with the form.
Click the "Mark As Done" button on the newly created task.
Expected Result In the browser console, you should see the Task's element logged.
Step 3: Adding the Task id to the DOM

Useful Resources for this step

Using Data Attributes
Template literals
In order to find the correct Task we want to update, we need a way to find which TaskManager's Task's "Mark As Done" button we clicked on the page. To do this, we'll be using our unique id we set for each task in the previous project steps.

Before we do however, we'll need to make sure we add this id to the HTML of each task, so that we can later retrieve the id and use it to look up which task we clicked.

In js/taskManager.js, find the createTaskHtml function created in the project's Task 7.

Add a new parameter to the function, id.

Within the HTML of the task, use a placeholder (${}) in the template literal to add the id as the value of a data-task-id attribute of the surrounding task element - Either the <li> or the <div>, depending on which one your group used.

Note Check the Using Data Attributes resource to see how this is done!

In js/taskManager.js, find the render() method of the TaskManager class.

Find where createTaskHtml is used, and pass in the task.id as the new id parameter.

Test Your Code!

Now is a good chance to test your code, open js/index.js and do the following:

In the previous test your code, we logged out the Task DOM element, re-implement the same test code.
Expected Result In the browser console, you should see the Task's element logged, the Task element should now have a data-task-id attribute set to the id of the task.
Step 4: Adding getTaskById to the TaskManager class

Useful Resources for this step

Loops and iteration
Now that we have our task id in our HTML, we need a way to use the id to find the correct task. In this step, we'll implement a getTaskById method on our TaskManager class to do just that. The getTaskById will compare a passed in taskId parameter to the ids of the TaskManager tasks. If it finds a matching task, it will return it from the method.

In js/taskManager.js, find the TaskManager class.

Add a new method, getTaskById(), it should accept a taskId as a parameter.

In the getTaskById() method, create a foundTask variable to store the found task.

Note Since we'll be mutating (modifying) this variable, be sure to declare it with let!

Loop over the this.tasks array, for each task in the loop:

Store the current task in a variable called task

Compare task.id to the passed in taskId, if its a match, store the task to the variable foundTask

After the loop, return the foundTask variable from the method.

Test Your Code!

Now is a good chance to test your code, open index.html in the browser and do the following:

Add a task using the new task form
Open the JavaScript console
Call getTaskById() using the TaskManager instance created in js/index.js, using 0 as the taskId eg: taskManager.getTaskById(0).
Expected Result In the browser console, you should see an object representing the task with an id of 0.
Step 5: Update the status of the selected Task to 'DONE'

Useful Resources for this step

Using Data Attributes
Number
Now that we have the code in place that adds each task.id to the DOM, as well as a method getTaskById to retrieve the right ask from our TaskManager, we can combine the two to update the task.status to 'DONE' once the "Mark As Done" button is clicked.

In js/index.js, find the Event Listener for the Task List click event we created in Step 2.

After finding the parentTask, create a taskId variable, setting the value to the taskId data-attribute of the DOM element.

Note: The data-attribute will be a String, but our ids are stored as Numbers, make sure to convert the String to a Number before setting it to the taskId variable. Check example/js/index.js if you get stuck!

Using the taskId as it's parameter, call the getTaskById() method on the taskManager, storing the result in a task variable.

Change the status of the task to 'DONE'.

Render the updated task by calling the render() method on the taskManager.

Test Your Code!

Now is a good chance to test your code, open index.html in the browser and do the following:

Add a task using the new task form
Click the "Mark As Done" button on the newly created task
Expected Result You should see the status of the task update to 'DONE' in the browser!
(OPTIONAL 1) Step 6: Stretch Goal - Hiding the "Mark As Done" Button For Completed Tasks

Useful Resources for this step

Conditional (ternary) operator
Stretch Goals are optional steps to attempt once your group has completed all previous steps. Stretch Goals require out-of-the-box thinking and do not include a step-by-step walkthrough. It's a challenge, good luck!

For this Stretch Goal, we want to hide the "Mark As Done" button for Task's that are already done.

In js/taskManager.js, in the HTML for each Task, add an invisible class to the "Mark As Done" button if the status parameter is 'TODO', and the visible class if it isn't.

Check out example/js/taskManager.js for a completed example!

(OPTIONAL 2) Step 7: Stretch Goal - Change the Styling of the Task Status.

Useful Resources for this step

Conditional (ternary) operator
Stretch Goals are optional steps to attempt once your group has completed all previous steps. Stretch Goals require out-of-the-box thinking and do not include a step-by-step walkthrough. It's a challenge, good luck!

For this Stretch Goal, we want to add specific styles to our Task Status depending on whether the Status is 'DONE' or 'TODO'.

In js/taskManager.js, in the HTML for each Task, change the style (eg: color) of the Task Status, depending on whether the passed in status is equal to 'TODO' or not.

Check out example/js/taskManager.js for a completed example!

Results

Open up index.html and add a task. Now we should we able to click the "Mark As Done" button below each task, to change the status from "TODO" to "DONE".

Your task should meet the assesment criteria in the Final Project - Scorecard Rubric.