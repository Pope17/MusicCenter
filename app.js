const express = require('express');
const app = express();
const path = require('path');
const PUERTO = 3000;

app.use(express.static('./public'));

app.listen(PUERTO, function(){
    console.log('Servidor corriendo')
});

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './views/home.html'))
})