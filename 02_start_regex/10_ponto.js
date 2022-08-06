// isso pode ser um problema

const texto = 'Bom\ndia';

//[ 'Bom', index: 0, input: 'Bom\ndia', groups: undefined ]
console.log(texto.match(/.../)); // vai pegar o Bom

// null
console.log(texto.match(/..../)); // ATENCAO o '.' nao engloba o '\n' quebra de linha

// detalhe - algumas linguagens tem um flag /exp/s ... js nao tem isso
