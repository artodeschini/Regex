const texto = 'a   z';

const regex3s = /\s\s\s/;

console.log(texto.match(regex3s));
console.log(texto.split(regex3s));

// posibilidades
console.log(texto.match(/a   z/));
console.log(texto.match(/a\s\s\sz/));

// abordado posteriormente
console.log(texto.match(/a\s+z/));
console.log(texto.match(/a {3}z/));
console.log(texto.match(/a\s{3}z/));

