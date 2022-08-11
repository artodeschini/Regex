const texto = 'abcdefghijklmnopqrstuvwxyz';

// regex com 12 grupos solicitando 13 retrovisor
let regex13 = /(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\13/g 
// regex com 12 grupos solicitando 12 retrovisor
let regex12 = /(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g

console.log(texto.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\13/g));

console.log(texto.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\9/g));