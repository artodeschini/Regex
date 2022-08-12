const texto = `
Os email dos convidados são:
    - fulano@gmail.com
    - xico@yahoo.com
    - joao@registro.br
    - rafa.sampaio@dominio.com.br
    - maria_silva@qualquer.gov.br
`;

// ['fulano@gmail.com','xico@yahoo.com','joao@registro.br','rafa.sampaio@dominio.com.br','maria_silva@qualquer.gov.br']
console.log(texto.match(/\S+@\w+.\w{2,6}(\.\w{2})?/g));