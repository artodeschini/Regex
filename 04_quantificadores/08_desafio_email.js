const texto = `
Os email dos convidados são:
    - fulano@gmail.com
    - xico@yahoo.com
    - joao@registro.br
    - rafa.sampaio@dominio.com.br
    - maria_silva@qualquer.gov.br
`;

// até aqui pega username sem '.' e primeira parte do dominio
//console.log(texto.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+/g)); // o '+' quer dizer que haverá uma ou mais ocorrencias


// até aqui pega dominio com '.com'
//console.log(texto.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g)); // o '+' quer dizer que haverá uma ou mais ocorrencias

//console.log(texto.match(/\w+@\w+\.\w{2,4}/g)); // nao pego 'rafa.sampaio' e nem o 'com.br'

//console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g)); // nao pega o 'com.br'

console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g)); // nao pega o 'com.br'
