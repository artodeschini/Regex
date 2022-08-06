// no inicio
// um byte 8 bits - 256 charactres 
// Simbolos, pontuacao A-Z a-z, 0-9 (caracteres sem acentuacao)

// dois bytes 16 bits - 65500 caracteres
// + simbolos, +pontuaçao, A-Z a-z, 0-9

// Unicode
// quantidade de bytes variavel - expansivo
// suport

//https://unicode-table.com/pt/#basic-latin

const texto = "ֆת";

console.log(texto.match(/\u05600|\u05806/g));