const texto = `
123456
cod3r
QUASE123!
Opa1!
AbcdEfghijLmnOpqRsTuvx!

SenhaF0rt&%
Outr4S&nha
Foi123!
`;

// senhas que tenha 6 a 20 caractres

// ['123456','QUASE123!','AbcdEfghijLmnOpqRsTu','SenhaF0rt&%','Outr4S&nha','Foi123!']
console.log(texto.match(/^.{6,20}/gm));

// verifica se ha letras Maiusculas
// [ 'QUASE123!', 'SenhaF0rt&%', 'Outr4S&nha', 'Foi123!' ]
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm));

// verifica se ha letras minusculas numeros e caractres especiais
// [ 'SenhaF0rt&%', 'Outr4S&nha', 'Foi123!' ]
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$!^&*]).{6,20}$/gm));