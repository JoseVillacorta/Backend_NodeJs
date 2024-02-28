const http = require("http");

const hostname = "127.0.0.1";
const port = 9999;

const server = http.createServer((req, res)=>{
    console.log(req);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hola mundo desde el lado del servidor...");
});

server.listen(port, hostname, ()=>{
    console.log("Iniciando servidor HTTP en http://"+hostname+":"+port);
});
