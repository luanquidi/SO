const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Curses = require('./Parking');

mongoose.connect(
    'mongodb://localhost:27017/myapp', { useNewUrlParser: true },
    () => {
        console.log('Conencted DB');
    }
);


// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



app.get('/data-parking', (req, res) => {
    Curses.find().then((data) => {
        return res.status(200).send({
            ok: true,
            data: data,
        });
    })
});


app.listen(3000, () => {
    console.log('ecuchando')
});