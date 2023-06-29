
var addedTasks = [];

document.getElementById('todo-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var taskName = document.getElementById('task-name').value;
  var priority = document.getElementById('priority').value;

  
  if (isTaskAlreadyAdded(taskName)) {
    alert('Task already added!');
    return;
  }

  
  addedTasks.push({ taskName: taskName, priority: priority });

  var taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  taskItem.innerHTML = '<span>' + taskName + ' - Priority: ' + priority +   '</span><button class="delete-btn">Delete</button>';

  document.getElementById('task-list').appendChild(taskItem);

  document.getElementById('task-name').value = '';
});

function isTaskAlreadyAdded(taskName) {
  for (var i = 0; i < addedTasks.length; i++) {
    if (addedTasks[i].taskName === taskName) {
      return true;
    }
  }
  return false;
}

document.getElementById('filter').addEventListener('change', function() {
  var filterValue = this.value;

  var taskItems = document.getElementsByClassName('task-item');

  for (var i = 0; i < taskItems.length; i++) {
    var priority = taskItems[i].querySelector('span').innerHTML.split(' - Priority: ')[1];
    if (filterValue === 'all' || priority === filterValue) {
      taskItems[i].style.display = 'flex';
    } else {
      taskItems[i].style.display = 'none';
    }
  }
});

document.getElementById('task-list').addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    var taskItem = event.target.parentNode;
    taskItem.parentNode.removeChild(taskItem);
  }
});
