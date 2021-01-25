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

hideTask = (event) => {
    // console.log(event.target); // check event target
    let clickedTask = event.target;
    let confirmDelete = confirm("Are you sure you want to complete this task?");
    if(confirmDelete){
        clickedTask.setAttribute("hidden", "");
    }
}


submitForm = (event) => {
    event.preventDefault(); // stop page from reloading

    // // check field values
    // console.log(taskDescription.value);
    // console.log(taskUrgency.value);
    // console.log(taskDue.value);

    // add task to appropriate display element
    if (taskUrgency.value == "urgent") {
        urgentTasks.innerHTML += `<div class="card text-white bg-danger">Task : ${taskDescription.value} Date : ${taskDue.value}</div>`;

        let urgentTaskItems = urgentTasks.querySelectorAll("div");
        urgentTaskItems.forEach(task => {
            task.addEventListener("click", hideTask);
        });

    } else {
        nonUrgentTasks.innerHTML += `<div class="card text-white bg-secondary">Task : ${taskDescription.value} Date : ${taskDue.value}</div>`;

        let nonUrgentTasksItems = nonUrgentTasks.querySelectorAll("div");
        nonUrgentTasksItems.forEach(task => {
            task.addEventListener("click", hideTask);
        });
    }

    // clear form fields
    taskDescription.value = "";
    taskUrgency.value = "";
    taskDue.value = "";
}

// add event listener to form submission
submitBtn.addEventListener("click", submitForm);
