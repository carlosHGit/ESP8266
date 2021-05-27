console.log('estamos corriendo del lado del cliente')
//io('http://localhost:3000');

const socket = io();

// Dom elements

let message = document.getElementById('message')
let username = document.getElementById('username')
let btn = document.getElementById('send')
let output = document.getElementById('output')
let actions = document.getElementById('message')

btn.addEventListener('click', function(){
  //console.log('click');

  socket.emit('chat:message', {
    message:message.value,
    username:username.value
  });

  socket.on('server:chat:message', function(data){
    output.innerHTML += 

    `<p><strong>${data.username}</strong>:${data.message}</p>`

    //console.log(data.username, data.message)
    console.log(data);   
    
  });
  
})
