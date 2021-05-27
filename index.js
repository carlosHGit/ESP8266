const path = require('path');
const express = require('express');
const SocketIo = require('socket.io');
const { connect } = require('http2');
const app = express();

//setting
app.set('port', process.env.PORT || 3000);


//static
app.use(express.static(path.join(__dirname, 'public'))); // use los archivo esatticos que tengo en esa dir

console.log(__dirname);



//start server  
const server = app.listen(app.get('port'), () =>{
  console.log('servidor corriendo en: ', app.get('port'));
});

//websockets
const io = SocketIo(server);

io.on('connection', (socket)=>{
  console.log('nueva conexion el ID del socket es : ', socket.id);
    
  socket.on('chat:message', (message) => {
    console.log('ha llegado un mensaje nuevo', message);
    io.emit('server:chat:message', message);   
  });

  //io.emit('esp:chat', {message: 'hola'});
  socket.on('connection', (data) =>{
    console.log(data);
  });
  socket.on('atime', (data) =>{
    console.log(data);
  });

  socket.on('JSON', (data) =>{
    console.log('datos del sensor: ');
    console.log(data);

  });

  socket.on('disconnect', () =>{
    console.log('el socket se ha desconectado');
  });
 
  
  })

