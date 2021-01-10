let canvas = document.getElementsById("snake");
let context = canvas.getContext("2d");
let box = 32;

function criarBG() {
    context.fillstyle = "lightgreen"
    context.fillRect(0, 0, 16 * box,);
}

criarBG();