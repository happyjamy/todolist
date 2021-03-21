const jsform = document.querySelector(".js-form"),
    input = document.querySelector("input");

const greetings = document.querySelector(".js-greetings");
const SHOWING_CN = "showing";
const user_LS = "currentUser"

function saveName(text){
    localStorage.setItem(user_LS, text);
}

function handlersubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    sayHello(currentValue);
    saveName(currentValue);
}

function askName(){
    jsform.classList.add(SHOWING_CN)
    jsform.addEventListener("submit", handlersubmit)

}

function sayHello(text) {
    greetings.classList.add(SHOWING_CN)
    jsform.classList.remove(SHOWING_CN)
    greetings.innerHTML = `Hello ${text}!`
}


function lodeName() {
    const currentUser = localStorage.getItem(user_LS)
    if(currentUser === null){
        askName();
    } else {
        sayHello(currentUser);
    }

}

function init() {
    lodeName();
};

init();


