const texto = '1,2,3,4,5,6,a c!d?e[f';

//[ 'a', 'c', 'd', 'e', 'f' ]
console.log(texto.match(/[a-z]/g)); // todas as letras minusculas

//[ '1', '2', '3', '4', '5', '6' ]
console.log(texto.match(/[0-9]/g)); // todas os digitos

//[ '2', '3', '4' ]
console.log(texto.match(/[2-4]/g)); // os valores são inclusivos

// ['2', '3', '4','a', 'c', 'd','e', 'f']
console.log(texto.match(/[2-4a-z]/g)); // misturando dois tipos