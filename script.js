const form = document.getElementById('task-form');
const titleInput = document.getElementById('task-title');
const descInput = document.getElementById('task-desc');
const priorityInput = document.getElementById('task-priority');
const taskIdInput = document.getElementById('task-id');
const taskList = document.getElementById('task-list');
const alertBox = document.getElementById('alert-message');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');
const formTitle = document.getElementById('form-title');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function showAlert(message, type) {
    alertBox.textContent = message;
    alertBox.className = `alert ${type}`;
    setTimeout(() => {
        alertBox.className = 'alert hidden';
    }, 3000);
}

function renderTasks() {
    taskList.innerHTML = '';
    
    if (tasks.length === 0) {
        taskList.innerHTML = '<p>Brak zadań. Dodaj coś, aby zacząć!</p>';
        return;
    }

    tasks.forEach(task => {
        const div = document.createElement('div');
        div.className = 'task-item';
        div.innerHTML = `
            <div class="task-details">
                <h3>${task.title}</h3>
                ${task.description ? `<p>${task.description}</p>` : ''}
                <span class="badge">Priorytet: ${task.priority}</span>
            </div>
            <div class="task-actions">
                <button class="btn-small btn-edit" onclick="editTask(${task.id})">Edytuj</button>
                <button class="btn-small btn-delete" onclick="deleteTask(${task.id})">Usuń</button>
            </div>
        `;
        taskList.appendChild(div);
    });
}

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const titleValue = titleInput.value.trim();
    const descValue = descInput.value.trim();
    const priorityValue = priorityInput.value;
    const idValue = taskIdInput.value;

    if (!titleValue) {
        showAlert('Tytuł zadania jest wymagany!', 'error');
        return;
    }

    if (idValue) {
        const taskIndex = tasks.findIndex(t => t.id == idValue);
        tasks[taskIndex] = {
            id: Number(idValue),
            title: titleValue,
            description: descValue,
            priority: priorityValue
        };
        showAlert('Zadanie zostało pomyślnie zaktualizowane.', 'info');
        resetForm();
    } else {
        const newTask = {
            id: Date.now(),
            title: titleValue,
            description: descValue,
            priority: priorityValue
        };
        tasks.push(newTask);
        showAlert('Zadanie zostało pomyślnie dodane.', 'success');
    }

    saveToLocalStorage();
    renderTasks();
    form.reset();
});

window.deleteTask = function(id) {
    if(confirm('Czy na pewno chcesz usunąć to zadanie?')) {
        tasks = tasks.filter(task => task.id !== id);
        saveToLocalStorage();
        renderTasks();
        showAlert('Zadanie zostało usunięte.', 'success');
    }
}

window.editTask = function(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    taskIdInput.value = task.id;
    titleInput.value = task.title;
    descInput.value = task.description;
    priorityInput.value = task.priority;

    formTitle.textContent = 'Edytuj zadanie';
    submitBtn.textContent = 'Zapisz zmiany';
    cancelBtn.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

cancelBtn.addEventListener('click', resetForm);

function resetForm() {
    form.reset();
    taskIdInput.value = '';
    formTitle.textContent = 'Dodaj nowe zadanie';
    submitBtn.textContent = 'Dodaj zadanie';
    cancelBtn.classList.add('hidden');
}

renderTasks();
