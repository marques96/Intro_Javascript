const teclas = document.querySelectorAll(".numero");
const display = document.querySelector(".display");

console.log(teclas);
console.log(display);

let displayContent = "";

teclas.forEach((e) => {
  const tecla = e;

  if (tecla.className == "tecla numero") {
    tecla.onclick = () => {
      displayContent += tecla.value;
      display.placeholder = displayContent;
    };
  }
});

// function teclanumero(indice) {
//   displayContent += teclas[indice].value;
//   display.placeholder = displayContent;
// }

function clearscreen() {
  displayContent = "";
  display.placeholder = displayContent;
}
