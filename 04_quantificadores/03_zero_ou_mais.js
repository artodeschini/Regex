const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOOO!';
const texto2 = 'There is a big fog in NYC';

// * -> zero ou mais
const regex = /fogo*/gi; // O '*' diz que o 'o' ao qual é seguido pelo '*' 

//[ 'fogo', 'FOGOOOOOOOOO' ] o 'o' é opcional porem o '*' é guloso e pegará o maximo que conseguir
console.log(texto1.match(regex));

//[ 'fog' ] pegou fog pois o 'o' é opctional
console.log(texto2.match(regex));
