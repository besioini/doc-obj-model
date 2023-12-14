
const form = document.querySelector('#task-form')
const taskList = document.querySelector('#collection')
const task = document.querySelector('#task')
const clearTask = document.querySelector('#clear-task')

loadEventListeners()

function loadEventListeners(){
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearTask.addEventListener('click', clearTasks)
}

function addTask(e){
  if(task.value === ''){
    alert('Please add a task')
    return false
  }
  const li = document.createElement('li');
  let taskVal = document.createTextNode(task.value);
  li.appendChild(taskVal);
  taskList.appendChild(li)

  const link = document.createElement('a');
  link.innerHTML = '<i class="fa fa-remove"></i>';
  link.style.cursor = 'pointer';
  li.appendChild(link);
  storeTask(task.value);

  // taskInput.value = '';

  e.preventDefault()
}

function removeTask(e){
  // console.log(e.target.parentElement)
  if(e.target.tagName === 'I'){
    if(confirm('Are you sure?')){
      // let li = e.target.closest('li');
      let li = e.target.parentElement.parentElement;
      li.remove();
      removeTaskFromLocalStorage(li)
    }
  }
}

function clearTasks(){
  // taskList.innerHTML = '';
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  clearFromLocalStorage();
}

function storeTask(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(taskItem, index){
    if(task.textContent === taskItem){
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearFromLocalStorage(){
  localStorage.clear()
}