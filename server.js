const datosWeb = require('./data.js');

const http = require('node:http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    const body = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>${datosWeb.title}</title>
    </head>
    <body>
        <center>
        <h1>${datosWeb.title}</h1>
        <h3>${datosWeb.subtitle}</h3>
        <p>${datosWeb.description}</p>
        </center>
    </body>
    `;
    res.end(body); // Convertimos el objeto a string para poder enviarlo como texto plano.
});


server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});