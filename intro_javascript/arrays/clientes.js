const semana = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];

// const tamanho = semana.length;

// for (let i = 0; i < tamanho; i++) {
//   console.log(semana[i]);
// }

semana.forEach((elemento, indice) => {
  console.log(`Dia ${indice + 1}: ${elemento}`);
});

//definição da função de callback
// function listaElemento(elemento, indice) {
//   console.log(`Dia ${indice + 1}: ${elemento}`);
// }
