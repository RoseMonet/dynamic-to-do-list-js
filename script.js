// Ensure the script runs only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

        // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' to not save again to Local Storage
    }
 // Function to add a new task
    function addTask(taskText, save = true) {
        // Retrieve and trim the task input value if taskText is not provided
        if (!taskText) {
            taskText = taskInput.value.trim();
        }
    
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
             removeTask(taskText);
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }

     // Save the task to Local Storage if save is true
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

                          // Function to remove a task from Local Storage
    function removeTask(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Add event listener to the "Add Task" button to call addTask function when clicked
   addButton.addEventListener('click', function() {
        addTask();
    });

      // Add event listener to the task input field to allow adding tasks with the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
