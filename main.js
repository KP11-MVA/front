document.addEventListener('DOMContentLoaded', function() {  
    const imgTaskAdd = document.getElementById("img-post-task")
    imgTaskAdd.addEventListener('click', function(){
        createTask()
    })
    getTasks()
    createTask("test", date.toISOString())
}, false)

const mockapiURL = "https://6788f2732c874e66b7d6fbf8.mockapi.io/task"

function getTasks(){
    const container = document.getElementById("task-container")
    fetch(mockapiURL, {
        method: 'GET',
        headers: {'content-type':'application/json'},
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        
      }).then(tasks => {
        container.innerHTML = ''
        tasks.forEach(task => {
           const taskName = task["name"]
           const li = document.createElement("li")
           li.classList += "task-item"
           li.innerHTML = `<span class="text-lg">${taskName}</span>
                <div class="flex gap-4 img-set">
                    <img src="./images/galochka.svg" alt="">
                    <img src="./images/karandash.svg" alt="">
                    <img src="./images/musorka.svg" alt="">
                </div>`
            container.appendChild(li)
        });
        
      }).catch(error => {
       
      })
}
function createTask(){
    const inputTask = document.getElementById("input-post-task")
    var date = new Date();
    const newTask = {
        name: inputTask.value,
        is_completed: false,
        created: date.toISOString()
      };
      
      fetch(mockapiURL, { method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(newTask)
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
      }).then(task => {
        inputTask.value = ""
        getTasks()
      }).catch(error => {
        
      })
}
