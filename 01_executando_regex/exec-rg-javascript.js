const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';

const regexNove = RegExp('9');

console.log('Metodos da RegExp');

// output true
console.log(regexNove.test(texto)); // retorna true por '9' existe no texto

/* output
[
  '9',
  index: 18,
  input: '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f',
  groups: undefined
]
*/
console.log(regexNove.exec(texto)); // retorna a ocorrencia que ele encontrou

const regexLetras = /[a-f]/g; // todas as letras de 'a' a 'f'
console.log('metodos da String...');

// output [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(texto.match(regexLetras)); // pega todas as ocorrencias na string

// output 20
console.log(texto.search(regexLetras)); // retorna o index do primeiro elemento encontrado

// output 0,1,2,3,4,5,6,7,8,9,Achou,Achou,Achou,Achou,Achou,Achou
console.log(texto.replace(regexLetras, 'Achou')); // substitui todas ocorrencias por um valor

// output [ '0,1,2,3,4,5,6,7,8,9,', ',', ',', ',', ',', ',', '' ]
console.log(texto.split(regexLetras)); // a cada ocorrencia irá gerar um index para o array
