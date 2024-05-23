// let nota1 = 4.9;
// let nota2 = 4.9;
// let nota3 = 4.9;
// let nota4 = 4.9;

// const media = (nota1 + nota2 + nota3 + nota4) / 4;

// if (media >= 7) {
//   console.log(`A média do aluno é: ${media} o aluno está aprovado`);
// } else if (media < 7 && media >= 5) {
//   console.log(`A média do aluno é: ${media} o aluno está de recuperaçao`);
// } else {
//   console.log(`A média do aluno é: ${media} o aluno está reprovado`);
// }

// const media = 7;

// const situacao = media >= 7 ? "Aprovado" : "Reprovado";

// console.log(situacao);

const altura = 1.4;
const idade = 12;

const estaApto = altura >= 1.7 && idade > 15;

if (estaApto) {
  console.log(
    `O candidato tem ${altura} de altura e ${idade} anos. Está apto para participar`
  );
} else {
  console.log(
    `O candidato tem ${altura} de altura e ${idade} anos. Está apto para trabalhar com Willy Wonka`
  );
}
