import express, { Router } from "express";

const router = express.Router();

router.get('/', (req, res) => { // req - lo que enviamos : res - lo que recibimos
    res.render('inicio')
});

router.get('/nosotros', (req, res) => { // req - lo que enviamos : res - lo que recibimos
   
   const viajes = 'Viaje a Japón';
   
    res.render('nosotros', {
        viajes
    })
});

router.get('/contacto', (req, res) => { // req - lo que enviamos : res - lo que recibimos
    res.send('Contacto')
});


export default router