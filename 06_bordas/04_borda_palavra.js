const texto1 = 'dia diatonico diaframa media wikipedia bom_dia melodia radial';

// '\b' borda de palavra

// [ 'diatonico', 'diaframa' ]
console.log(texto1.match(/\bdia\w+/gi)); // palavras que comecam com 'dia'

// [  'dia', 'diatonico', 'diaframa' ]
console.log(texto1.match(/\bdia\w*/gi)); // palavras que comecam com 'dia' e o restante é opctional 

// [ 'media', 'wikipedia', 'bom_dia', 'melodia' ]
console.log(texto1.match(/\w+dia\b/gi)); // palavras que terminam com 'dia'

// [ 'dia', 'media', 'wikipedia', 'bom_dia', 'melodia' ]
console.log(texto1.match(/\w*dia\b/gi)); // palavras que terminal com 'dia' e o comeco é opctional

// [ 'dia' ]
console.log(texto1.match(/\bdia\b/gi)); // borda dos dois lados

//borda é NAO '\w'  -> que é [^A-Za-z0-9_] 
// caracteres com acentos também sao considerados bordas

const texto2 = 'dia diatônico diaframa, média wikipédia bom-dia melodia radial';

//[ 'dia', 'dia', 'dia', 'dia' ]
console.log(texto2.match(/\bdia\b/gi)); // borda dos dois lados


// '\S' é o contrario dos espacos ou seja os desconsidere os espaços
// ['dia', 'diatônico','diaframa,', 'média','wikipédia', 'bom-dia','melodia',   'radial']
console.log(texto2.match(/(\S*)?dia(\S*)?/gi)); // a birgual entra

// ['dia','diatônico','diaframa',  'média','wikipédia', 'bom-dia','melodia',   'radial']
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi));