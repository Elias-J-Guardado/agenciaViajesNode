// const express = require('express'); common js
import express from "express";
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

//conectar la db
db.authenticate()
    .then(() => console.log('Base de datos iniciada'))
    .catch(error => console.log(error));

//definir puerto
const port = process.env.PORT || 4000;

// Habilitando pug
app.set('view engine', 'pug');

// Obtener año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    next();
})

//Agregar body parser para leer datos de formularios
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica
app.use(express.static('public'));

//Agregar router
app.use('/', router);


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})