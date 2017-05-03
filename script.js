const ul = document.getElementById("myList");
window.onload = function(){
    appendLi("Window.onload");
    measure();
};

function measure(){
    appendLi("window.screenX -- ", window.screenX);
    appendLi("window.screenY -- ", window.screenY);
    appendLi("window.devicePixelRatio -- ", window.devicePixelRatio);
}

function appendLi(){
    let li = document.createElement("li");
    li.innerHTML = "";
    for(let i = 0; i<arguments.length; i++){
        console.log(arguments[i]);
        li.innerHTML += arguments[i] + " ";
    }
    ul.appendChild(li);
}
