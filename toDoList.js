const toDoForm = document.querySelector(".js-todoForm"),
    toDoinput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-todoList"),
    finList = document.querySelector(".js-finList");
const todo_LS = "toDos",
    fin_LS = "finToDos";
let toDos = [];
let finToDos = [];

function backToDo(event){ 
    const targetFin = event.target.parentNode;
    const cleanToDos = finToDos.filter(function(toDo){
            return toDo.id === parseInt(targetFin.id);
        });
        const parsedcleanToDos = cleanToDos;
        parsedcleanToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });    

}
function killFinToDo(event){
    const targetLi = event.target
    const li = targetLi.parentNode;
    finList.removeChild(li)
    const cleanFinToDo = finToDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    
    finToDos = cleanFinToDo;
    saveFinToDos();
};

function killToDo(event){
    const targetLi = event.target
    const li = targetLi.parentNode;
    toDoList.removeChild(li); 
    function ff (toDo){
        return toDo.id !== parseInt(li.id)
    };
    const cleanToDo = toDos.filter(ff)
    toDos = cleanToDo;
    saveToDos();
}
function saveToDos(){
    localStorage.setItem(todo_LS,JSON.stringify(toDos));
} function saveFinToDos(){
    localStorage.setItem(fin_LS,JSON.stringify(finToDos));
}
function finToDo(text){
    const li = document.querySelector("li"),
    newId = finToDos.length +1;
    const span = document.createElement("span");
    span.innerText = text
    const delBt = document.createElement("button");
    delBt.innerText = "💥";
    delBt.addEventListener("click", killFinToDo);
    const backBt = document.querySelector("button")
    backBt.innerText = "☜(ﾟヮﾟ☜)"
    backBt.addEventListener("click", backToDo);
    backBt.addEventListener("click", killFinToDo);
    li.appendChild(span)
    li.appendChild(backBt)
    li.appendChild(delBt)
    li.id = newId;
    finList.appendChild(li)
    const finToDoObj = {
        text:text,
        id : newId
    };
    finToDos.push(finToDoObj);
    saveFinToDos();
};
function paintToDo(text){    const li = document.createElement("li");
    const newId = toDos.length +1
    const delBt = document.createElement("button");
    delBt.innerText = "❌";
    delBt.addEventListener("click", killToDo);
    const finBt =  document.createElement("button");
    finBt.innerText = "✅"
    finBt.addEventListener("click", finToDo)
    finBt.addEventListener("click",killToDo)
    const span = document.createElement("span");
    span.innerText = text
    li.appendChild(span)
    li.appendChild(delBt)
    li.appendChild(finBt)
    toDoList.appendChild(li);
    li.id = newId
    const toDoObj = {
        text:text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();

};

function handlersubmit(event){
    event.preventDefault();
    const todoValue = toDoinput.value;
    paintToDo(todoValue);
    toDoinput.value = "";
}
function loadToDO(){
    const lsToDos = localStorage.getItem(todo_LS);
    const lsFinToDos = localStorage.getItem(fin_LS);
    if(lsToDos !== null || lsFinToDos !== null){
        const parsedToDos = JSON.parse(lsToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
        const parsedFinToDos = JSON.parse(lsFinToDos);
        parsedFinToDos.forEach(function(toDo){
            finToDo(toDo.text);
        });


    }
};

function init(){
    loadToDO();
    toDoForm.addEventListener("submit",handlersubmit)
};
init();

