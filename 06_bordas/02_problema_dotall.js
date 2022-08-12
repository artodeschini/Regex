const texto = 'Romário era um excelente jogador\n, mas hje é um politico questionador';

// null
console.log(texto.match(/^r.*r$/gi)); // problema do dotall em js

//shorthands '\s' '\S' opostos
console.log(texto.match(/^r[\s\S]*r$/gi)); // problema do dotall em js