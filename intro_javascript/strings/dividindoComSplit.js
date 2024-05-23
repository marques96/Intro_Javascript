let text = "a;b;c;d;e;f";

text = text.split(";");

console.log(text);

for (const letra of text) {
  console.log(letra);
}
