const ul = document.getElementById("myList");
window.onload = function(){
    appendLi("Window.onload");
    measure();
};

function measure(){
    appendLi("window.screen.height", window.screen.height);
    appendLi("window.screen.width", window.screen.width);
    appendLi("window.devicePixelRatio -- ", window.devicePixelRatio);
    appendLi("window.screenX -- ", window.screenX);
    appendLi("window.screenY -- ", window.screenY);
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
window.onresize = function() {
    ul.innerHTML = "";
    measure();
}
