const content = document.querySelector(".content");
const setting = document.querySelector(".setting");
const topDiv = document.getElementById("top");
const bottomDiv = document.getElementById("bottom");

let scrollState = null;
window.addEventListener("wheel", e => e.preventDefault(), { passive:false })

function scrollUp(){
    if(scrollState == "down" || scrollState == null){
        topDiv.scrollIntoView({blocK: "end", behavior: "smooth"});
        console.log("up");
    }
    scrollState = "up";
}

function scrollDown(){
    if(scrollState == "up" || scrollState == null){
        bottomDiv.scrollIntoView({black:"end", behavior: "smooth"});
        console.log("down");
    }
    scrollState = "down";
}

function detectScroll(){
    window.onscroll = function(e) {
        if(this.oldScroll > this.scrollY){
            scrollUp();
        }
        if(this.oldScroll < this.scrollY){
            scrollDown();
        }
        this.oldScroll = this.scrollY;
      }
}

function init(){
    detectScroll();
}

init();