const greeting = document.querySelector(".greeting")
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");

const nameForm = document.querySelector(".greetingForm");
const nameInput = nameForm.querySelector("input");
const noteTitle = document.querySelector(".name");
const noteHeader = document.querySelector(".header");


const USER_LS = "currentUser";


function showOnNoteCover(name){
    const nameDiv = document.createElement("div");
    nameDiv.innerText= name + "'S";
    noteHeader.prepend(nameDiv);
}

function handleSubmit(event){
    event.preventDefault();
    const nameValue = nameInput.value.toUpperCase();
    //save in localstorage
    localStorage.setItem(USER_LS, nameValue);
    //show on note cover
    showOnNoteCover(nameValue);
    //hide ask content
    content1.style.display = "none";
    paintGreeting(nameValue);
}

function paintGreeting(text){
    content2.style.display = "block";
    content2.innerText = "Hi " + text + "!";
    greeting.style.animation = "fadein 5s";

    greeting.addEventListener('animationend', function(event){
        if (event.type === "animationend"){
            greeting.style.display = "none";
        }
    })
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //show greeting page
    }else{
        greeting.style.display = "none";
        showOnNoteCover(currentUser);
    }
}
function init(){
    loadName();
    nameForm.addEventListener("submit", handleSubmit);
}

init();