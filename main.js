console.log(`HTML CSS JS To Do App`); // sanity check

// select form fields
let taskDescription = document.querySelector("#taskDescription");
let taskUrgency = document.querySelector("#taskUrgency");
let taskDue = document.querySelector("#taskDue");
// form submit button
let submitBtn = document.querySelector("button");
// display tasks by urgency
let urgentTasks = document.querySelector("#urgentTasks");
let nonUrgentTasks = document.querySelector("#nonUrgentTasks");

// function to hide a clicked task
hideTask = (event) => {
    console.log(event.target); // check event target
    let clickedTask = event.target; 
    // confirm to remove task and save return value (t/f)
    let confirmDelete = confirm("Are you sure you want to complete this task?");
    // if confirm returns true (user choses okay)
    if(confirmDelete){
        // apply the event target's hidden attribute
        clickedTask.setAttribute("hidden", "");
    }
}

// function to handle form submission : add task to correct list, clear fields, and add event listeners for tasks to be hidden
submitForm = (event) => {
    event.preventDefault(); // stop page from reloading

    // check field values
    console.log(taskDescription.value);
    console.log(taskUrgency.value);
    console.log(taskDue.value);

    // add task to appropriate display element
    if (taskUrgency.value == "urgent") {
        // append task with bootstrap classes and class used for adding event listener 
        urgentTasks.innerHTML += `<div class="card text-white bg-danger taskItem">Task : ${taskDescription.value} Date : ${taskDue.value}</div>`;

        // previous implementation of adding an event listener to every task in the urgent task list
        // let urgentTaskItems = urgentTasks.querySelectorAll("div");
        // urgentTaskItems.forEach(task => {
        //     task.addEventListener("click", hideTask);
        // });

    } else {
        // append task with bootstrap classes and class used for adding event listener 
        nonUrgentTasks.innerHTML += `<div class="card text-white bg-secondary taskItem">Task : ${taskDescription.value} Date : ${taskDue.value}</div>`;

        // previous implementation of adding an event listener to every task in the non-urgent task list
        // let nonUrgentTasksItems = nonUrgentTasks.querySelectorAll("div");
        // nonUrgentTasksItems.forEach(task => {
        //     task.addEventListener("click", hideTask);
        // });
    }

    // select all tasks in both lists
    let tasks = document.querySelectorAll(".taskItem");
    console.log(tasks); // check that all tasks are in list when a new task is added
    // add an event listener for the same handler to each task
    tasks.forEach(task => {
        task.addEventListener("click", hideTask);
    })

    // clear form fields
    taskDescription.value = "";
    taskUrgency.value = "";
    taskDue.value = "";
}

// add event listener to form submission
submitBtn.addEventListener("click", submitForm);
