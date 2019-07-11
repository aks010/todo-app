// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load Event Listeners
loadEventListeners();

// Add Task
function loadEventListeners() {
    form.addEventListener('submit', addTask);
}

// Remove Task
document.querySelector('.collection').addEventListener('click',removeItem);

// Clear Tasks
clearBtn.addEventListener('click', clearTasks);

// Filter Tasks
filter.addEventListener('keyup',filterTasks);

// Change Background
const container = document.querySelector('.container');
container.addEventListener('mousemove', changeBkg);

// add task
function addTask(e) {
    
    if(taskInput.value === '') {
        alert('Add a task.');
    }
    else {
    // Create list item
    const li = document.createElement('li');
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = "delete-item";
    // link.innerHTML = '<i class="fa fa-times" style="color:#ff5252;"></i>';
    link.innerHTML = '<span style="color:red">X</span>';


    li.appendChild(link);
    taskList.appendChild(li);
    }
    taskInput.value = '';
    taskInput.focus;
    e.preventDefault();
}


// Remove Item
function removeItem(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm(`Delete the task: ${e.target.parentElement.parentElement.textContent}?`))
        e.target.parentElement.parentElement.remove() ;
    }
} 


// Clear Tasks
function clearTasks(e) {
    /* 
    document.querySelectorAll('.collection-item').forEach(function(el){
        el.remove();
        }
    )
    */
   if(taskList.firstChild) {
        if(confirm('Clear the Task List?')) {
        
             while(taskList.firstChild) {
              taskList.removeChild(taskList.firstChild);
            }
        }
    } 
    else {
        alert('Nothing to clear!!');
    }
}


// Filter Tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    let tasks = document.querySelectorAll('.collection-item');
    tasks.forEach(function (task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }

    })

}

// Change Background Color
function changeBkg (e) {
    let x = e.offsetX;
    let y = e.offsetY;
    document.body.style.backgroundColor = `rgb(${(x)/3},${(y)/3},40)`;
}

