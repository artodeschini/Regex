const texto = 'ABC [abc] a-c 1234';

// [ 'a', 'b', 'c', 'a', 'c' ]
console.log(texto.match(/[a-c]/g)); // range valido

// [ 'a-c' ]
console.log(texto.match(/a-c/g)); // nao define um range valido

// [ 'A', 'B', 'C', '[','a', 'b', 'c', ']','a', 'c']
console.log(texto.match(/[A-z]/g)); // usa o interval de ordem da tabela UNICODE

// tem que respoetar a ordem da tabela UNICODE
// console.log(texto.match(/[a-Z]/g));


// SyntaxError: Invalid regular expression: /[a-Z]/: Range out of order in character class
    // at Object.<anonymous> (/Users/Artur/front/regex/03_conjuntos/tempCodeRunnerFile.js:13:19)
    // at Module._compile (node:internal/modules/cjs/loader:1101:14)
    // at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    // at Module.load (node:internal/modules/cjs/loader:981:32)
    // at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    // at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    // at node:internal/main/run_main_module:17:47

// console.log(texto.match(/[4-1]/g));
// SyntaxError: Invalid regular expression: /[4-1]/: Range out of order in character class
//     at Object.<anonymous> (/Users/Artur/front/regex/03_conjuntos/tempCodeRunnerFile.js:14:19)
//     at Module._compile (node:internal/modules/cjs/loader:1101:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47