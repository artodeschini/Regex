const texto = '<div>Conteudo 01</div><div>Conteudo 03</div>';

// quantificadore SÃO GULOSOS (greedy) ...

//[ '<div>Conteudo 01</div><div>Conteudo 03</div>' ]
console.log(texto.match(/<div>.+<\/div>/g)); //comportamento guloso traz as tags

//[ '<div>Conteudo 01</div><div>Conteudo 03</div>' ]
console.log(texto.match(/<div>.*<\/div>/g)); //comportamento guloso traz as tags

//[ '<div>Conteudo 01</div><div>Conteudo 03</div>' ]
console.log(texto.match(/<div>.{0,100}<\/div>/g)); //comportamento guloso traz as tags

// quantificadore NÃO GULOSOS (lazy) ...

// [ '<div>Conteudo 01</div>', '<div>Conteudo 03</div>' ]
console.log(texto.match(/<div>.+?<\/div>/g)); //comportamento guloso traz as tags
console.log(texto.match(/<div>.*?<\/div>/g)); //comportamento guloso traz as tags
console.log(texto.match(/<div>.{0,100}?<\/div>/g)); //comportamento guloso traz as tags