// . é um corringa, valido para uma posição na sua regex

const texto = '1,2,3,4,5,6,7,8,9,0';

// [ '1,2' ]
console.log(texto.match(/1.2/g)); // 1 (qualquer caractere) 2 // no caso pegou a ,

// null // nao acha nada pois seer coringa requer que tenha dois caracteres entre 1 e 2
console.log(texto.match(/1..2/g)); // 1 (qualquer caractere) (qualquer caractere) 2

//[ '1,2,' ] 
console.log(texto.match(/1..,/g)); // o '..' foram substituidos por ',2' respectivamente

const notas = '8.3,7.1,8.8,10.0';

// [ '8.3', '8.8' ]
console.log(notas.match(/8../g)); // encontrará qualquer ocorrencia de notas 8 decimal e nao importa a decimal

// [ '8.3', '7.1', '8.8', '0.0' ]
console.log(notas.match(/.\../g)); // traz qualquer nota x.x ... obviamente o 10.0 ficou de fora