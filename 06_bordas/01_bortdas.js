const texto = 'Romário era um excelente jogador\n, mas hje é um politico questionador';

// [ 'R', 'r', 'r', 'r', 'r' ]
console.log(texto.match(/r/gi));

// '^' negado
// [ 'R' ]
console.log(texto.match(/^r/gi)); // inicio da linha string

// [ 'r' ]
console.log(texto.match(/r$/gi)); // fim da linha string

// null
console.log(texto.match(/^r.*r$/gi)); // problema do dotall em js não pega o '\n'