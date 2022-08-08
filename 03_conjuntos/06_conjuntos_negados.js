const texto = '1,2,3,4,5,6,a c!d?e[f\n\f\r';

// [',',  ',',  ',',  ',', ',',',',  'a',  ' ',  'c', '!','d',  '?',  'e',  '[', 'f','\n', '\f', '\r']
console.log(texto.match(/\D/g)); // tudo que nao e numero

// [',',  ',',  ',',  ',', ',',',',  'a',  ' ',  'c', '!','d',  '?',  'e',  '[', 'f','\n', '\f', '\r']
console.log(texto.match(/[^0-9]/g)); // tudo que nao e numero

// [',',  ',',  ',',  ',', ',',',',  'a',  ' ',  'c', '!','d',  '?',  'e',  '[', 'f','\n', '\f', '\r']
console.log(texto.match(/[^\d]/g)); // tudo que nao e numero

//[ 'a', 'c', 'd', 'e', 'f' ]
console.log(texto.match(/[^\d!\?\[\s,\.]/g)) // so as letras 

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@';

// [ '1', '2' ]
console.log(texto2.match(/[^!-/:-@\s]/g)); // na verdade são 2 intervalos


