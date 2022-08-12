const texto = '0 1 10 192 199 201 249 255 256 312 10 1010 1512';

// numeros entre 0 - 255

// [Running] node "/Users/Artur/front/regex/07_receitas_dicas/tempCodeRunnerFile.js"
// ['0','1','10','192', '199', '201','249', '255', '10']
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g));