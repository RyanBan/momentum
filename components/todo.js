const form = document.querySelector(".toDoForm");
const toDoInput = form.querySelector("input");
const toDoList = document.querySelector(".toDoList");

const wall = document.querySelector(".wall");

const TODO_LS = 'todos';
let toDos = [];
let TODOID = 1;

function finishToDO(event){
        let div = event.target.parentNode;
        //check finished status
        let selectedTaskFromTODOS = toDos.find(function(todo){return (todo.id == div.id)});
        if(!selectedTaskFromTODOS.finished){
            console.log("clicked");
            //save finished task
            selectedTaskFromTODOS.finished = true;
            saveToDos();
            //draw line on postIt
            div.style.textDecoration = "line-through";
            //draw line on list
           toDoList.childNodes.forEach(function(child){
                if(child.id == div.id){
                    console.log(div);
                    console.log(child);
                    child.style.textDecoration = "line-through";
                }
            });
        };
}

function checkNumOfToDO (){
    if(toDos.length == 9){
        toDoInput.placeholder="";
        toDoInput.disabled = true;
    }
    else{
        toDoInput.placeholder="What u gonna do?";
        toDoInput.disabled = false;
    }
}

function deletePostIt(id){
    wall.childNodes.forEach(function(child){
        if(child.id === id){
            wall.removeChild(child);
        }
    })
}

function paintToDoOnPostIt(text, finished){
    let div = document.createElement("div");
    const span = document.createElement("span");
    const newId = TODOID;
    let randomDegree =  Math.floor((Math.random() * 5) + 1) - 3;
    span.innerText = text;
    span.addEventListener("click", finishToDO);
    div.appendChild(span);
    div.id = newId;
    if(finished){
        div.style.textDecoration = "line-through";
    }
    div.style.transform = `rotate(${randomDegree}deg)`;
    wall.appendChild(div);
}

function deleteToDo(event){
    let li = event.target.parentNode;
    toDoList.removeChild(li);
    deletePostIt(li.id);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    TODOID += 1;
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
    checkNumOfToDO();
}

function paintToDoOnLists(text, finished){
    const div = document.createElement("div");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = TODOID;
    delBtn.innerText = "❌"
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text

    if(finished){
        div.style.textDecoration = "line-through";
    }

    div.appendChild(span);
    div.appendChild(delBtn);
    div.id = newId;
    toDoList.appendChild(div);

    const todoObj = {
        text: text,
        id: TODOID,
        finished: finished
    }
    toDos.push(todoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDoOnPostIt(currentValue, false);
    paintToDoOnLists(currentValue, false);
    toDoInput.value = "";
}


function loadToDos(){
    const LoadedToDos = localStorage.getItem(TODO_LS);
    if(LoadedToDos !== null){
        const parsedToDOs = JSON.parse(LoadedToDos);
        parsedToDOs.forEach(function(toDo){
            paintToDoOnPostIt(toDo.text, toDo.finished);
            paintToDoOnLists(toDo.text, toDo.finished);
        })
    }
}

function init() {
    loadToDos();
    form.addEventListener("submit", handleSubmit);
}

init();