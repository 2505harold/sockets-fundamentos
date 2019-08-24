

 var socket = io();

 //on son para escuchar
 socket.on('connect',function(){
     console.log("conectado al servidor")
 })

 socket.on('disconnect',function(){
     console.log("perdimos conexion con le servidor")
 })

 //emit son para enviar informacion
 socket.emit('enviarMensaje',{
     usuario: "Harold",
     mensaje: "Hola mundo"
 },function(resp){
     console.log('Respuesta Server:', resp)
 })

 // escuchar informacion
 socket.on('enviarMensaje',function(resp){
     console.log('Servidor:',resp)
 })