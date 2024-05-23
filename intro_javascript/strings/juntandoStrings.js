let nome = "El";
let sobrenome = "Rata";
let ultimoNome = "Alada";

nome = nome.trim();
sobrenome = sobrenome.trim();

const nomeCompleto = nome + sobrenome;

console.log(nomeCompleto);

const nomeCompletoConcat = nome.concat(" ", sobrenome).concat(" ", ultimoNome);

console.log(nomeCompletoConcat);
