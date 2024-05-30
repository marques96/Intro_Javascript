const teclas = document.querySelectorAll(".tecla");
const display = document.querySelector(".display");

// console.log(teclas);
// console.log(display);

let displayContent = "";
let operador = "";
let valor = 0;
let result = 0;

teclas.forEach((e) => {
  const tecla = e;

  if (tecla.className == "tecla numero") {
    tecla.onclick = () => {
      displayContent += tecla.value;
      display.placeholder = displayContent;
      valor = Number.parseInt(displayContent);
      console.log(`Variável valor: ${valor}`);
    };
  }

  if (tecla.className == "tecla operador") {
    tecla.onclick = () => {
      operador = tecla.value;
      console.log(`Operador: ${operador}`);
      clearscreen();
      executarOperacao();
    };
  }
});

function executarOperacao() {
  if (operador == "+") {
    result += valor;
    valor = 0;
  }

  if (operador == "-") {
    result -= valor;
    valor = 0;
  }
}

function exibirResultado() {
  executarOperacao();
  displayContent = result;
  display.placeholder = displayContent;
  result = 0;
}

function clearscreen() {
  displayContent = "";
  display.placeholder = displayContent;
}

// function teclanumero(indice) {
//   displayContent += teclas[indice].value;
//   display.placeholder = displayContent;
// }
