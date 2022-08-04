const texto = '1,2,3,4,5,6a.v c!d?e';

const regexVirgula = /,/;

//[ '1', '2', '3', '4', '5', '6a.v c!d?e' ]
console.log(texto.split(regexVirgula));

//[ ',', index: 1, input: '1,2,3,4,5,6a.v c!d?e', groups: undefined ]
console.log(texto.match(regexVirgula)); // como nao tem 'g' global ... acha 1 e para

// [ ',', ',', ',', ',', ',' ]
console.log(texto.match(/,/g)); // traz todas as ocorrencias de , pois tem 'g'

// null
console.log(texto.match(/A/)); // nao ha ocorrencias de 'A' no texto

// null
console.log(texto.match(/A/g)); // nao ha ocorrencias de 'A' no texto mesmo colocando 'g'

// [ 'a' ]
console.log(texto.match(/A/gi)); // encontra 'a' no texto devido ao 'i' ignore o case

// [ '2' ]
console.log(texto.match(/2/g)); // ha ocorrencia de '2' no texto

// [ 'c!d', index: 15, input: '1,2,3,4,5,6a.v c!d?e', groups: undefined ]
console.log(texto.match(/c!d/)); // nao ha ocorrencias de 'c!d' no texto