
const http = require("http");

const hostname = "127.0.0.1";
const port = "3216";    

console.log("Hola mundo");

const server = http.createServer((req, res)=>{
    console.log(req);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hola mundo desde el lado del servidor ...");
});

server.listen(hostname, port, ()=>{
    console.log("Iniciando servidor HTTP en http://" + hostname + ":" + port);
});
