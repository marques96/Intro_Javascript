const string1 = "Anna";
const string2 = "arara";

function checaPalindromo(str) {
  str = str.toLowerCase().replace(/\s/g, "");
  return str === str.split("").reverse().join("");
}

console.log(checaPalindromo(string1));
console.log(checaPalindromo(string2));
