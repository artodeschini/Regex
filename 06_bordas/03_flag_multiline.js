const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Biana é casa com Habib
`;

//[ '\n', '\n', '\n', '\n' ]
console.log(texto.match(/\n/g));

// null 
console.log(texto.match(/^(\w).+\1$/g)); // o '.' nao captura o '\n'

//['Leo é muito legal','Emanuel foi jogar em Sergipe','Biana é casa com Habib']
console.log(texto.match(/^(\w).+\1$/gim)); // já com o 'm' 