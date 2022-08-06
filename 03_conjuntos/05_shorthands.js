const texto = '1,2,3,4,5,6,a c!d?e[f\n\f\r';

// o shordhands 'm' (regra) 'M' (oposto da regra) ou ^

//[ '1', '2', '3', '4', '5', '6' ]
console.log(texto.match(/\d/g)); // shorthand de digitos [0-9]

// [',', ',', ',', ',',',', ',', 'a', ' ','c', '!', 'd', '?','e', '[', 'f']
console.log(texto.match(/\D/g)); // shorthand de tudo que não é digitos [^0-9]

//['1', '2', '3', '4','5', '6', 'a', 'c','d', 'e', 'f']
console.log(texto.match(/\w/g)); // caracteres [a-zA-Z0-9_]


// [ ',', ',', ',', ',',',', ',', ' ', '!','?', '[']
console.log(texto.match(/\W/g)); // nao caracteres [^a-zA-Z0-9_]

// [ ' ', '\n', '\f', '\r' ]
console.log(texto.match(/\s/g)); // espacos em brancos [ \t\n\r\f]

//  ['1', ',', '2', ',', '3',',', '4', ',', '5', ',','6', ',', 'a', 'c', '!','d', '?', 'e', '[', 'f']
console.log(texto.match(/\S/g)); // os nao espacos em brancos [^ \t\n\r\f]