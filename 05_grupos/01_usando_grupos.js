const texto1 = 'O João é muito engraçado ,,,, hahahahaha';

// um grupo é delimitado por parenteses '()'

//[ 'ha', 'ha', 'ha', 'ha', 'ha' ] 
console.log(texto1.match(/(ha)/gi)); // assim pegará todas ocorrencias do grupo separados

//[ 'hahahahaha' ]
console.log(texto1.match(/(ha)+/gi)); // com o '+' pegará todas ocorrencias do grupo juntas

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag';

// 1 grupo (http:\/\/) é opcional devido ao '?'
// 2 grupo (www\.) é opcional devido ao '?'
// 3 grupo (\.\w{2}) também é opctional '?'
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g));