import http from 'http';

const PORT = 3000
const rotas = {
    "/": "curso de Node.js",
    "/Livros": "Entrei na rota livros",
    "/Autores": "Entrei na rota Autores"
}
const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-type": "text/plain"});
    res.end(rotas[req.url])
})

server.listen(PORT, ()=> {
    console.log("Servidor escutando!")
});
