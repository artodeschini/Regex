const texto = '1,2,3,4,5,6,a c!d?e[f';

// para definir uma ckasse (ou conjunto de caracteres) usa-se []
const regexPares = /[2468]/g;

//[ '2', '4', '6' ]
console.log(texto.match(regexPares));

const texto2 = 'João não vai passear na moto, pois ele nao gosta!';
const regexNaoComESemAcento = /n[aã]o/g

console.log(texto2.match(regexNaoComESemAcento));