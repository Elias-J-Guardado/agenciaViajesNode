import express, { Router } from "express";

const router = express.Router();

router.get('/', (req, res) => { // req - lo que enviamos : res - lo que recibimos
    res.send('Inicio')
});

router.get('/nosotros', (req, res) => { // req - lo que enviamos : res - lo que recibimos
    res.render('nosotros')
});

router.get('/contacto', (req, res) => { // req - lo que enviamos : res - lo que recibimos
    res.send('Contacto')
});


export default router