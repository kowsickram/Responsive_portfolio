const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `<span>${taskText}</span>
                    <button class="edit">Edit</button>
                    <button class="Complete">Completed</button>`;
    taskList.appendChild(li);

    taskInput.value = '';

    const editBtn = li.querySelector('.edit');
    const CompleteBtn = li.querySelector('.Complete');

    editBtn.addEventListener('click', () => editTask(li, taskText));
    CompleteBtn.addEventListener('click', () => CompleteTask(li));
}

function editTask(li, taskText) {
    const newText = prompt('Edit task:', taskText);
    if (newText !== null) {
        li.querySelector('span').textContent = newText;
    }
}

function CompleteTask(li) {
    li.remove();
}
