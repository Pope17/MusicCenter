const express = require('express');
const app = express();

//disponibilizamos Public
app.use(express.static('public'));

//requerimos el archivo de ruta

const mainRoutes = require('./routes/mainRoutes');

app.set('view engines', 'ejs')

//Rutas

app.use('/', mainRoutes)

//rutas de productos

app.listen(3000, () => {
    console.log('Servidor funcionando')
})
