const form = document.querySelector(".js-form");
const input = form.querySelector("input");

const USER_LS = "currentUser"

function loadName () {
    const currentUser = localStorage.getItem(USER_LS);
    
}
function init () {
    loadName();
}

init();
