const texto = 'João é calmo, mas no transito fica nervoso.';

// [À-ú] pega todas as acentuacoes
//['João',  'é','calmo', 'mas','no',    'transito','fica',  'nervoso']
console.log(texto.match(/[\w[À-ú]+/gi));

// procure uma virgula no que atendem a primeira expressao
//[ 'calmo' ]
console.log(texto.match(/[\w[À-ú]+(?=,)/gi)); // pega 'calmo'

// procure uma virgula no que atendem a primeira expressao
// [ 'nervoso' ]
console.log(texto.match(/[\w[À-ú]+(?=\.)/gi)); 

//[ 'calmo' ]
console.log(texto.match(/[\w[À-ú]+(?=, mas)/gi));

// palavras que nao estejam na frente de virgula
//[ 'João', 'mas', 'no', 'transito', 'fica', 'nervoso' ]
console.log(texto.match(/[\w[À-ú]+\b(?!,)/gi));

//[ 'João ', 'é ', 'mas ', 'no ', 'transito ', 'fica ', 'nervoso.' ]
console.log(texto.match(/[\w[À-ú]+[\s|\.](?!,)/gi));