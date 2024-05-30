const teclas = document.querySelectorAll(".tecla");
const display = document.querySelector(".display");

// console.log(teclas);
// console.log(display);

let displayContent = "";
let operador = "";
let valores = [];
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
      valores.push(valor);
      console.log(valores);
      if (valores.length > 0) {
        clearscreen();
        executarOperacao();
      }
    };
  }
});

function executarOperacao() {
  if (operador == "+") {
    result = valores.reduce((t, v) => t + v);
  }

  if (operador == "-") {
    result = valores.reduce((t, v) => t - v);
  }
  if (operador == "x") {
    result = valores.reduce((t, v) => t * v);
  }
  if (operador == "÷") {
    result = valores.reduce((t, v) => t / v);
  }
}

function exibirResultado() {
  valores.push(valor);
  console.log(`Valor: ${valor} | Valores: ${valores}`);
  executarOperacao();
  displayContent = result;
  display.placeholder = displayContent;
  valores = [];
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
