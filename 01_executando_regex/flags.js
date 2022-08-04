// g - global
// i - ignore case

// procurar por 'A' ou 'ab' case sera obrigatório 1 ocorrencia irá parar
const texto1 = 'Artur assinou o abaixo-assinado certamente.';
console.log(texto1.match(/A|ab/));

// procurar por 'a' ou 'ab' nao importa o case com 'i' 1 ocorrencia irá parar
const texto2 = 'Artur assinou o abaixo-assinado certamente.';
console.log(texto2.match(/a|ab/i));  

// procurar por 'ab' ou 'c' nao importa o case todas ocorrenias sem parar com uso de 'g'
const texto3 = 'Artur assinou o abaixo-assinado certamente.';
console.log(texto3.match(/ab|c/gi));