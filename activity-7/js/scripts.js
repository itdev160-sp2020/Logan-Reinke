var tasks = [];

const taskStatus = {
    active: 'active',
    completed: 'completed'
};

(function (){
    var activeListHeading = document.createElement('h2');
    var completedListHeading = document.createElement('h2');

    var activeHeadingText = document.createTextNode('To Be Done');
    var completedHeadingText = document.createTextNode('Already Done');

    activeListHeading.appendChild(activeHeadingText);
    completedListHeading.appendChild(completedHeadingText);

    var activeList = document.getElementById('active-list');
    var completedList = document.getElementById('completed-list');

    var section = document.getElementById('todo-list-container');

    section.insertBefore(activeListHeading, activeList);
    section.insertBefore(completedListHeading, completedList);

})();

function Task(id, name, status){
    this.id = id;
    this.name = name;
    this.status = status;
}

function addTaskElement(task){

    var activeList = document.getElementById('active-list');
    var taskListItem = document.createElement('li');
    var taskText = document.createTextNode(task.name);
    var deleteBtn = document.createElement('button');
    var btnText = document.createTextNode('X');
    
    deleteBtn.setAttribute('class', 'delete');
    deleteBtn.appendChild(btnText);

    taskListItem.setAttribute('id', task.id)

    taskListItem.appendChild(taskText);
    taskListItem.appendChild(deleteBtn);
    activeList.appendChild(taskListItem);
}

function addTask(){
    var input = document.getElementById('input-task');
    var text = input.value;

    if(text != ''){
        var taskId = 'task-' + tasks.length;

        var task = new Task(taskId, text, taskStatus.active);

        tasks.push(task);
        addTaskElement(task);

        input.value = '';
    }
}

function completeTask(e){
    if(e.target.classList.contains('delete')){
        var deleteBtn = e.target;
        var taskEl = deleteBtn.parentNode;

        var id = taskEl.id;
        for (var index = 0; index < tasks.length; index++) {
            if (tasks[index].id === id) {
                tasks[index].status = taskStatus.completed;
                break;
            }
        }

        taskEl.remove();
        deleteBtn.remove();

        document.getElementById('completed-list').appendChild(taskEl);
    }
}

function init(){
    var addBtn = document.getElementById('add-task').addEventListener('click', addTask);
    document.getElementById('active-list').onclick = completeTask;
}

init();
