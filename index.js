const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config();


const app = express();

// capturar bodyparser
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// conexion bases de datos
const uri =`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.twf2c.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const option = {useNewUrlParser:true, useUnifiedTopology:true};
  mongoose.connect(uri, option)
    .then(() => console.log('connected'))
    .catch(e => console.log('error: ',e))

// importar rutas
const authRoutes = require('./routes/AuthRoutes');

// rutas middleware
app.use('/api/user', authRoutes);

app.get('/', (req, res) => {
  res.json({
    estado:true,
    mensaje: 'funciona'
  });
});

// iniciar server

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('servidor corriendo puerto: ', PORT);
});
