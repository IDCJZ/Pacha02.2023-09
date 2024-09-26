const passport = require('passport');
const session = require('express-session');
const { createServer } = require('node:http');
require('dotenv').config()
const express = require('express');
const { join } = require('node:path');
const { Server } = require('socket.io');
const app = express();
const server = createServer(app);
const io = new Server(server,{ connectionStateRecovery: {}});
const {createMensaje}=require('./src/controllers/controlles')


app.use(express.json());
require('./auth');

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}
app.get('/', (req, res) => {
  res.send('<br><a href="/auth/google">Authenticate with Google</a> <br><a href="/auth/github">Authenticate withgithub</a><br><a href="/auth/linkedin">Authenticate with linkedin</a><br><a href="/auth/facebook">Authenticate with facebook</a>');
});

//GOOGLE
app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/success',
    failureRedirect: '/auth/google/failure'
  })
);

app.get('/auth/google/failure', (req, res) => {
  res.send('Failed to authenticate..');
});
//GITHUB
app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/github/callback',
  passport.authenticate('github', {
    successRedirect: '/success',
    failureRedirect: '/auth/github/failure'
  })
);

app.get('/auth/github/failure', (req, res) => {
  res.send('Failed to authenticate..');
});
//LINKEDIN
app.get('/auth/linkedin',
  passport.authenticate('linkedin', { state: 'SOME STATE'  }),
  function(req, res){
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
  });
  app.get('/linkedin/callback',
  passport.authenticate('linkedin', {
    successRedirect: '/success',
    failureRedirect: '/auth/linkedin/failure'
  })
);

app.get('/auth/linkedin/failure', (req, res) => {
  res.send('Failed to authenticate..');
});
//FACEBOOK
app.get('/auth/facebook',
  passport.authenticate('facebook'));
  app.get('/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/success',
    failureRedirect: '/auth/facebook/failure'
  })
);
app.get('/success',isLoggedIn,(req,res)=>{
  res.sendFile(join(__dirname, './src/public/index.html'));
});
app.get('/auth/facebook/failure', (req, res) => {
  res.send('Failed to authenticate..');
});

io.on("connection", (socket) => {
  console.log("usuario conectado");
  socket.on("chat message", (msg) => {
    createMensaje(msg.destino, msg.usuario, msg.mensage);
    console.log(socket);
    io.emit("chat message", msg);
  });
});




PORT = process.env.portserver;
server.listen(PORT, () => {
  console.log(`servidor conectado ${PORT}`)
})