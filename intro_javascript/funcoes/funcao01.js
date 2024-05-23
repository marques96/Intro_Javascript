function soma(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}

console.log(soma(90, 6));
console.log(mult(5, 5));

const eDeMaior = function (idade) {
  if (idade >= 18) {
    return true;
  }

  return false;
};

const saida = eDeMaior(17) ? "Maior de idade" : "Menor de idade";
console.log(saida);

const expo = (b, p) => b ** p;
console.log(expo(5, 2));
