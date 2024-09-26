const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rpineda:pacha2023@cluster0.tk3tvfe.mongodb.net/veterinaria');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});