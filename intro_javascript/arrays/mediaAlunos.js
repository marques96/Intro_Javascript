const alunos = [];
const alunoNotas = {
  maria: 10,
  mirian: 8.5,
};

console.log(Array.isArray(alunos));
console.log(Array.isArray(alunoNotas));

alunos.push("Vegetti");
alunos.push("Adriane Galisteu");
const tamanho = alunos.push("André Matos");

console.log(alunos);
console.log(`Tamanho do Array: ${tamanho}`);
