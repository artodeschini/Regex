const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!';

// [ '(', 'a', ')', 'A', 'B', 'C' ]
console.log(texto.match(/[(abc)]/gi));  // atencao isso nao tem um grupo
// dentro de um conjunto o grupo nao existe '[(' , ')]' os parenteses sao os caracteres literais

// [ 'a', 'A', 'B', 'C' ]
console.log(texto.match(/([abc])/gi));  // é um grupo!
// pode haver um conjunto dentro de um grupo!