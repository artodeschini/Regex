const texto = 'A casa bonita é a casa amarela da esquina com a Rua ACASALAR.';

const regex = /casa/gi; // irá pesquisar por casa 'g' varias ocorencias nao 'i' importa o case

// output [ 'casa', 'casa', 'CASA' ] ... o g faz trazer as ocorrencias
console.log(texto.match(regex));

/** output
 * [
  'a c', // ocorrencia
  index: 16, // posicao
  input: 'A casa bonita é a casa amarela da esquina com a Rua ACASALAR.', // em qual texto
  groups: undefined // nao informado
]
 */
console.log(texto.match(/a c/));