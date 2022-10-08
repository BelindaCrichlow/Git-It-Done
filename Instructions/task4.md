Task 4: Task Form Inputs Validation

Description

Implement a form that captures the fields required to create a task.

Tools

HTML5
Bootstrap
JavaScript
Walkthrough

Step 1: Add a task form

In this step, we'll add a form to create a new task.

Add a button to submit your form.
Useful Resources for this step

Forms
Buttons
Step 2: Implement a JavaScript function to validate your form fields

Create a JavaScript file named index.js and include it into your index.html page.
Implement a JavaScript function named validFormFieldInput(data)
Add an ID attribute to each form field and implement the code needed to retrieve the each form field value using the following method:

 const newTaskNameInput = document.querySelector('#newTaskNameInput');
 const name = newTaskNameInput.value;

Log your field inputs to verify that you are getting the data you need to validate.
 const newTaskNameInput = document.querySelector('#newTaskNameInput');
 const name = newTaskNameInput.value;
 console.log("name:  "+name);


Useful Resources for this step

Forms
Query selector documentation
Step 3: Showing errors to users

Add a Bootstrap alert component inside your form to display the errors to the users.
Add the logic to display or hide the error message when the form is submited.
Display a meaningful error when a form filed is invalid and the user clicks the submit button.
Add the logic to hide the error message when the user clicks the submit button and the form data is valid.
Useful Resources for this step

Bootstrap alert component
Document.querySelector() documentation
Test Your Code!

Now is a good chance to test your code, open your index.html page and fill in wrong data on the form and check if the right error is shown. Verify also that when the form fields are correct then no error message is displayed.
Results

We've now create your task form with the JavaScript validations to make sure the user submits correct data!