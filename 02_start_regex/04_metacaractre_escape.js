const texto = '1,2,3,4,5,6,a.v c!d?e';

const regexPonto = /\./g; // como o ponto é um meta caracteres preciso usar \ para escape

// [ '1,2,3,4,5,6a', 'v c!d?e' ]
console.log(texto.split(regexPonto));

const regexSimbolos = /,|\.|\?|!| /g; // , ou . ou ? ou ! espaco todas ocorrencias

// ['1', '2', '3','4', '5', '6a','v', 'c', 'd','e']
console.log(texto.split(regexSimbolos));