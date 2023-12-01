//Buttons
let addBtn = document.querySelector('#add-btn')
addBtn.addEventListener('click', addTask)

// let sortBtn = document.querySelector('#sort-btn')
// sortBtn.addEventListener('click', sortTasks )


//Add Task Function
let inputTask = document.querySelector('#inputTask').value
let newTasksArr = []

function addTask(newTask){
     if (newTask){
        let inputTask = {
            id : newTasksArr.length,
            name: inputTask,
            createdDate: new Date(),
            completed: false
    };
    newTasksArr.push(newTask)
    localStorage.setItem('newTask', JSON.stringify(newTask))
    
    currentTasks();
    }
}

function currentTasks(){
    let tasks = document.querySelector('#Current-tasks')
    tasks.innerHTML = "newTask"
}

