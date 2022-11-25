const express = require('express');
const app = express();
const port = 3030;
const path = require('path')

/* Recursos estáticos (estilos, imagenes, archivos) */
app.use(express.static('public'))

/* Rutas */

app.get('/',(req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/babbage',(req, res) => res.sendFile(path.join(__dirname, 'views', 'babbage.html')));
app.get('/berner-lee',(req, res) => res.sendFile(path.join(__dirname, 'views', 'berner-lee.html')));
app.get('/clarke',(req, res) => res.sendFile(path.join(__dirname, 'views', 'clarke.html')));
app.get('/hamilton',(req, res) => res.sendFile(path.join(__dirname, 'views', 'hamilton.html')));
app.get('/hopper',(req, res) => res.sendFile(path.join(__dirname, 'views', 'hopper.html')));
app.get('/lovelace',(req, res) => res.sendFile(path.join(__dirname, 'views', 'lovelace.html')));
app.get('/turing',(req, res) => res.sendFile(path.join(__dirname, 'views', 'turing.html')));
app.get('*',(req, res) => res.sendFile(path.join(__dirname, 'views', '404.html')));



/* Servidor */
app.listen(port, () => console.log(`Servidor funcionando en http://localhost:${port}`));