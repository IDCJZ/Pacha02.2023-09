const  express= require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const {createMensaje}=require('./src/controllers/controlles')
const app = express();
const server = createServer(app);
const io = new Server(server,{ connectionStateRecovery: {}});
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, './src/public/index.html'));
  });

  io.on("connection", (socket) => {
    console.log("usuario conectado");
    socket.on("chat message", (msg) => {
      createMensaje(msg.destino, msg.usuario, msg.mensage);
      console.log(socket);
      io.emit("chat message", msg);
    });
  });
const mensajes=require('./src/routes/routes');
app.use('/mensajes',mensajes);

const PORT = 4040
server.listen(PORT,()=>{
    console.log(`Servidor listo en el puerto ${PORT}` );
})