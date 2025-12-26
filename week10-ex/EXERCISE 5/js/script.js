// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function displayTasks(taskList) {
  // Get container
  let container = document.querySelector(".container");
  
  // Clear old tasks
  let oldItems = document.querySelectorAll(".item");
  oldItems.forEach(item => item.remove());
  
  // Display each task
  taskList.forEach(task => {
    let item = document.createElement("div");
    item.className = "item";
    item.textContent = task.description;
    
    // Set color based on priority
    if (task.priority === 1) {
      item.style.backgroundColor = "red";
    } else {
      item.style.backgroundColor = "grey";
    }
    
    container.appendChild(item);
  });
}

function addItem() {
  // 1- Create a new task
  let task = {};

  // 2- Set the description from the text field
  task.description = document.getElementById("description").value;

  // 3- Set the priority from select field (convert to number)
  let priorityValue = document.getElementById("priority").value;
  task.priority = (priorityValue === "High") ? 1 : 0;

  // 4- Add the new object to the array
  tasks.push(task);

  // 5- Update the DOM
  displayTasks(tasks);

  console.log(tasks);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);