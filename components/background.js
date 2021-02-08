const body = document.querySelector("body");

function paintImage(){
    const image = new Image();
    image.src = "./assets/table.jpg";
    image.classList.add("bgImage");
    body.appendChild(image)
}

function init() {
    paintImage();
}
init();