function calculaMedia(n1, n2, n3, n4) {
  const media = (n1 + n2 + n3 + n4) / 4;
  if (media >= 7) {
    console.log(`A média do aluno é: ${media} o aluno está aprovado`);
  } else if (media < 7 && media >= 5) {
    console.log(`A média do aluno é: ${media} o aluno está de recuperaçao`);
  } else {
    console.log(`A média do aluno é: ${media} o aluno está reprovado`);
  }
  return media;
}

const mediaAluno = calculaMedia(8, 8, 5, 5);

console.log(`A média final é: ${mediaAluno}`);
