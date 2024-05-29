const teclas = document.querySelectorAll(".numero");
const display = document.querySelector(".display");

console.log(teclas);
console.log(display);

let displayContent = "";

function teclasete() {
  displayContent += teclas[0].value;
  display.placeholder = displayContent;
}

function teclaoito() {
  displayContent += teclas[1].value;
  display.placeholder = displayContent;
}

function teclanove() {
  displayContent += teclas[2].value;
  display.placeholder = displayContent;
}

function teclaquatro() {
  displayContent += teclas[3].value;
  display.placeholder = displayContent;
}

function teclacinco() {
  displayContent += teclas[4].value;
  display.placeholder = displayContent;
}

function teclaseis() {
  displayContent += teclas[5].value;
  display.placeholder = displayContent;
}

function teclaum() {
  displayContent += teclas[6].value;
  display.placeholder = displayContent;
}
function tecladois() {
  displayContent += teclas[7].value;
  display.placeholder = displayContent;
}
function teclatres() {
  displayContent += teclas[8].value;
  display.placeholder = displayContent;
}

function clearscreen() {
  displayContent = "";
  display.placeholder = displayContent;
}
