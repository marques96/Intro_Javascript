const precos = [360, 550, 800];

const precosAtualizados = precos.map((preco) => {
  if (preco > 500) {
    return preco - preco * 0.1;
  } else {
    return preco;
  }
});

//Operador ternário
const precosCorrigidos = precos.map((preco) => {
  return preco > 500 ? preco * 0.9 : preco;
});

console.log(precos);
console.log(precosAtualizados);
console.log(precosCorrigidos);
