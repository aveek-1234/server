
var port = process.env.port || 5000;
const app = require('express')();
const server = require("http").createServer(app);
const io= require('socket.io')(server,{
    cors :{
        origin :"*",
    },
});

io.on("connection",(Socket)=>{
    Socket.on("chat",(payload)=>{
         io.emit("chat",payload);
    });
});


server.listen(port,()=>{
    console.log("Server at port 5000");
})