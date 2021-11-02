const express = require('express');
const app = express();
const path = require('path');

//disponibilizamos Public
app.use(express.static(path.join(__dirname, 'public')));

//requerimos el archivo de ruta

const mainRoutes = require('./routes/mainRoutes')

//Rutas

app.use('/', mainRoutes)

//rutas de productos

app.listen(3000, () => {
    console.log('Servidor funcionando')
})
