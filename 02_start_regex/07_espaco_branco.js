const texto = `
ca	r
r	o	s!
`;

//[ '\n', '\n', '\n' ]
console.log(texto.match(/\n/g)); // quebras de linhas

// [ ' s!', index: 14, input: '\nca  r\nr   o   s!\n', groups: undefined ]
console.log(texto.match(/\ss!/)); // o 's' representa espaco em branco

console.log(texto.match(/\t!/));
