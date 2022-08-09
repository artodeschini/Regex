const texto = 'João recebeu 120 milhões apostando 69 21 23 45 46';

// para definir um quantificador use {}

//['12', '0',  '69','21', '23', '45','46']
console.log(texto.match(/\d{1,2}/g));

//[ '12', '69', '21', '23', '45', '46' ]
console.log(texto.match(/[0-9]{2}/g)); // numeros com dois digitos

// [ '120', '69', '21', '23', '45', '46' ]
console.log(texto.match(/\d{1,}/g)); // 'guloso' pega todos os numeros e o maximo que conseguir vide '120'

//[ 'recebeu', 'apostan' ]
console.log(texto.match(/\w{7}/g)); // palavras com caracteres ascii com 7 letras

// [ 'recebeu', 'milhões', 'apostan' ]
console.log(texto.match(/[\wõ]{7}/g)); //o conjunto tento o '\w' e 'õ' para trazer milhões; 