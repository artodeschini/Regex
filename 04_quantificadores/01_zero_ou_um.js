const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOOO!';
const texto2 = 'There is a big fog in NYC';

// ? -> zero ou um (opctional)
const regex = /fogo?/gi; // O '?' diz que o 'o' ao qual é seguido pelo '?' é opcional

//[ 'fogo', 'FOGO' ] nao se importou com os d+ Os 
console.log(texto1.match(regex));

//[ 'fog' ] pegou fog pois o 'o' é opctional
console.log(texto2.match(regex));
