const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const app = express();
const path = require('path')

app.use(session ({
    secret: "El silencio es parte de la música",
    resave: false,
    saveUninitialized: false,
}));

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.listen(3000, () => console.log('Servidor funcionando en el puerto 3000'));

//template Engine

app.set('views', path.resolve(__dirname, './views'))
app.set("view engine", "ejs");    

//Rutas
const mainRoutes = require('./routes/mainRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware.js');
const routesProductos = require('./routes/routesProductos.js');

//app.use('/', index);
app.use('/', mainRoutes);
//app.use('/', productos);
app.use('/login', userRoutes);
app.use('/', routesProductos);


//disponibilizamos Public

app.use(cookies());

app.use(userLoggedMiddleware);


module.exports = app;
