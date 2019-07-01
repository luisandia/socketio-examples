const http = require('http');
const socketio = require('socket.io');



const server = http.createServer((req, res) => {
    res.end("I'm contected")
});

const io = socketio(server)

io.on('connect', (socket, req) => {
    console.log("user connected!!!");
    socket.emit('welcome', 'Welcome to websocket server!!');
    socket.on('message', (msg) => {
        console.log(msg);
    })

})

server.listen(8000);