const texto = '.$+*?-';

//[ '.', '$', '+', '*', '?' ]
console.log(texto.match(/[+.?*$]/g)); // dentro de um conjunto não preciso usar \ 'escape'

// [ '.' ]
console.log(texto.match(/[.]/g));

// [ '.$', '+*', '?-' ] <- pegou paresdevido ao '.' corringa ou qualquer coisa
console.log(texto.match(/[+.?*$]./g)); // observe o '.' fora do conjunto olhe a diferenca

// [ '.', '$', '+', '*', '?', '-' ]
console.log(texto.match(/[$-?]/g)) // isso é um intervalo (range)

// [ '$', '?', '-' ]
console.log(texto.match(/[$\-?]/g)) // isso nao é um intervalo devido ao '\-'

//[ '$', '?', '-' ]
console.log(texto.match(/[-$?]/g)) // isso nao é um intervalo pois o - está no começo, mesmo nao precisando de escape

// caracteres que podem precisar de escape dentro de um conjunto são

/**
 *      - hifem
 *      [ ] conchetes tanto abrir como fechar
 *      ^ circuflexo
 */