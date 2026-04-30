// const express = require('express'); common js
import express from "express";
import router from './routes/index.js';

const app = express();

//definir puerto
const port = process.env.PORT || 4000;

// Habilitando pug
app.set('view engine', 'pug');

//Agregar router
app.use('/', router);


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})