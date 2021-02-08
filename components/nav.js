const postBtn = document.querySelector(".postBtn");
const noteBtn = document.querySelector(".noteBtn");

const post = document.querySelector(".postSection");
const note = document.querySelector(".noteSection");

let currentView = "noteView"
window.addEventListener("wheel", e => e.preventDefault(), { passive:false })
window.addEventListener('resize', resizeView);

function resizeView(){
    if(currentView == "noteView"){
        goToNotePage();
    }else{
        goToPostPage();
    }
}
function goToPostPage(){
    post.scrollIntoView({blocK: "end", behavior: "smooth"});
    currentView="postView";
}

function goToNotePage(){
    note.scrollIntoView({blocK: "end", behavior: "smooth"});
    currentView="noteView";
}


function init(){
    postBtn.addEventListener('click', goToPostPage);
    noteBtn.addEventListener('click', goToNotePage);
    note.scrollIntoView();
}

init();