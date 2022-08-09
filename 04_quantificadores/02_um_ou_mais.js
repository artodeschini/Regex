const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOOO!';
const texto2 = 'There is a big fog in NYC';

// + -> um ou mais
const regex = /fogo+/gi; // O '+' diz que o 'o' é obrigatorio e pode haver mais ocorrencias

//[ 'fogo', 'FOGOOOOOOOOO' ] trouxe 'fogo' e 'FOGOOOOOOOOOO' inclusive com os Os  
console.log(texto1.match(regex));

// null nao achou nada pois 'o' no final era obrigatorio haver ao menos 1
console.log(texto2.match(regex));

const texto3 = 'Os números: 0123456789.';

// ['0', '1', '2', '3','4', '5', '6', '7','8', '9']
console.log(texto3.match(/[0-9]/gi)); // pega todos digitos um em cada posiçao

//[ '0123456789' ]
console.log(texto3.match(/[0-9]+/gi)); // pega todos os digitos em em UMA posicao

// [ '0123456789' ]
console.log(texto3.match(/\d+/gi)); // pega todos os digitos em em UMA posicao
