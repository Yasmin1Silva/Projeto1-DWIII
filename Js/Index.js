/* ----------------------------------------------------------------------
  FATEC - ZONA SUL - Aula 31/08/26 - 3Sem - DSM
  NOME: Murilo Silva | Yasmin Rocha
  -----------------------------------------------------------------------
  DESCRIÇÃO: Servidor web nativo em Node.js, utilizando rotas e chamadas 
  assíncronas. A aplicação processa requisições de forma eficiente e sem 
  bloqueios, servindo diferentes páginas conforme a URL acessada.
  -----------------------------------------------------------------------
*/


// Essa parte seria algo parecido com as bibliotecas do Python.
const http = require('http');
const url = require('url');
const fs = require('fs');

// Função para ler arquivo e enviar ao reponse http:
  function readFile(response, file){

    fs.readFile(file, function(err, data ){
      if(err) {
        response.writeHead(500, { 'content-type': 'text/plain' });
        response.end('Erro ao ler arquivo: ' + err);
        return;
      }
      response.end(data);
    });
  };
//Aplicação Isolada - Com Callback:
let callback = function (request, response) {

  // Faz o Parse da URL, spara os endpoints:
  let parts = url.parse(request.url);

  //Verificar os end-points:
 if (parts.pathname === "/") {

    response.writeHead(200, { 'content-type': 'text/html' });
    readFile(response, __dirname + "/../Html/index.html");

}

else if (parts.pathname.startsWith("/Css/")) {

    response.writeHead(200, { 'content-type': 'text/css; charset=utf-8' });
    readFile(response, __dirname + "/../" + parts.pathname);

}

else if (parts.pathname.startsWith("/Js/")) {

    response.writeHead(200, { 'content-type': 'application/javascript; charset=utf-8' });
    readFile(response, __dirname + "/../" + parts.pathname);

}

else if (parts.pathname === "/Murilo") {

    response.writeHead(200, { 'content-type': 'text/html' });
    readFile(response, __dirname + "/../Html/Murilo/Murilo.html");

}

else if (parts.pathname === "/Murilo/Sobre") {

    response.writeHead(200, { 'content-type': 'text/html' });
    readFile(response, __dirname + "/../Html/Murilo/QS_Murilo.html");

}

else if (parts.pathname === "/Murilo/Curriculo") {

    response.writeHead(200, { 'content-type': 'application/pdf' });
    readFile(response, __dirname + "/../PDF/Curriculo_Murilo.pdf");

}

else if (parts.pathname === "/Yasmin") {

    response.writeHead(200, { 'content-type': 'text/html' });
    readFile(response, __dirname + "/../Html/Yasmin/Yasmin.html");

}

else if (parts.pathname === "/Yasmin/Sobre") {

    response.writeHead(200, { 'content-type': 'text/html' });
    readFile(response, __dirname + "/../Html/Yasmin/QS_Yasmin.html");

}

else if (parts.pathname === "/Yasmin/Curriculo") {

    response.writeHead(200, { 'content-type': 'application/pdf' });
    readFile(response, __dirname + "/../PDF/Curriculo_Yasmin.pdf");

}

else if (parts.pathname === "/Projeto") {

    response.writeHead(200, { 'content-type': 'application/pdf' });
    readFile(response, __dirname + "/../PDF/Projeto.pdf");

}

else {

    response.writeHead(404, { 'content-type': 'text/html' });
    readFile(response, __dirname + "/../Html/erro404.html");

}

}

//Criar o servidor:
let server = http.createServer(callback);

//Configurar o servidor:
server.listen(3000);
console.log('Servidor iniciado em http://localhost:3000....');
