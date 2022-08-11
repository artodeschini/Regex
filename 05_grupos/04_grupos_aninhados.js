const texto = 'supermercado hipermercado minimercado meercado';

//[ 'supermercado', 'hipermercado', 'minimercado' ]
console.log(texto.match(/(super|hiper|mini)?mercado/g)); // preferencia uso dessa forma mais claro

//[ 'supermercado', 'hipermercado', 'minimercado' ]
console.log(texto.match(/((su|hi)per|mini)?mercado/g)); // exemplo grupo aninhado