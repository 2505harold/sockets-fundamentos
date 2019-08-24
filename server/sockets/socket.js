
const {io} = require('../server')

//saber cuando un susario se conecta
io.on('connection',(client)=>{
    //'client' contiene toda la informacion de la pc que se conecto
    console.log("usuario conectado")

    client.emit('enviarMensaje',{
        usuario: 'Admin',
        mensaje:'BIenvenido a esta aplicacion'
    })

    client.on("disconnect",()=>{
        console.log("Usuario desconectado")
    })

    // escuchar el cliente
    client.on('enviarMensaje',(data,callback)=>{
        console.log(data)
        client.broadcast.emit('enviarMensaje',data)
        //el callback es para hacer algo cuando todo sale bien
        // if(mensaje.usuario){
        //     callback({
        //         resp:'Todo salio bien'
        //     })
        // }
        // else{
        //     callback({
        //         resp:'Todo salio mal!!!!!'
        //     })
        // }
    })


})
