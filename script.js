// Ensure the script runs only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

     // Function to add a new task
    function addTask() {
              // Retrieve and trim the task input value
        const taskText = taskInput.value.trim();

          // If the input is empty, alert the user and exit the function
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

           // Create a new list item element for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

          // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn'); // Add class for styling

           // Set up the remove button to delete the task when clicked
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }

    
    // Add event listener to the "Add Task" button to call addTask function when clicked
    addButton.addEventListener('click', addTask);

      // Add event listener to the task input field to allow adding tasks with the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
