const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteúdo</div>';

// pegar as tags
// \\w+ pega 1 ou + caracteres

//[ '<b>', '<strong>', '<div>' ] 
console.log(texto1.match(/<(\w+)>/g)); // assim eu posso pegar as aberturas das tags

// cada grupo armazena uma posição de grupo 
// para pegar por exemplo o fechamento de '</b>' no caso uso '1' seu retrovisor

//[ '<b>Destaque</b>', '<strong>Forte</strong>', '<div>Conteúdo</div>' ]
console.log(texto1.match(/<(\w+)>.*<\/\1>/g)); // assim consigo pegar as tags e seus conteudos

const texto2 = 'Lentamente é mente muito lenta.';

// [ 'Lentamente' ]
console.log(texto2.match(/(lenta)(mente)/gi));

// agora tenho 2 grupos
// [ 'Lentamente é mente muito lenta' ]
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi));

// para um grupo nao guardar um indice de retrovisor use (?:)
// com a anotacao não guardara o indice no retrovisor

console.log(texto2.match(/(?:lenta)(mente).*\1/gi));

// [ 'Lentamente' ]
console.log(texto2.match(/(lenta)(mente)/gi));

// Lenta é mente muito lenta.
console.log(texto2.replace(/(lenta)(mente)/gi, '$1')); // alterando pelo 1 retrovisor 

// mente é mente muito lenta.
console.log(texto2.replace(/(lenta)(mente)/gi, '$2')); // alterando pelo 2 retrovisor

// ANTESLenta é mente muito lenta.
console.log(texto2.replace(/(lenta)(mente)/gi, 'ANTES$1')); // alterando pelo 1 retrovisor

// LentaDEPOIS é mente muito lenta.
console.log(texto2.replace(/(lenta)(mente)/gi, '$1DEPOIS')); // alterando pelo 1 retrovisor

// ANTESLentaDEPOIS é mente muito lenta.
console.log(texto2.replace(/(lenta)(mente)/gi, 'ANTES$1DEPOIS')); // alterando pelo 1 retrovisor
