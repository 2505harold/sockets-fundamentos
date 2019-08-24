const express = require('express');
const socketIO = require('socket.io')
const path = require('path');
const http = require('http')

const app = express();

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;


//midleware para habilitar la carpeta publica
app.use(express.static(publicPath));


//inicializar socketio IO = esta es la colmunicacion del BACKEND
module.exports.io = socketIO(server)
require('./sockets/socket')

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});