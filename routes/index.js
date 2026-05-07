import express, { Router } from "express";

const router = express.Router();

router.get('/', (req, res) => { // req - lo que enviamos : res - lo que recibimos
    res.render('inicio', {
        pagina: 'Inicio'
    })
});

router.get('/nosotros', (req, res) => { // req - lo que enviamos : res - lo que recibimos
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
});

router.get('/viajes', (req, res) => { // req - lo que enviamos : res - lo que recibimos
    res.render('viajes', {
        pagina: 'Viajes'
    })
});

router.get('/testimoniales', (req, res) => { // req - lo que enviamos : res - lo que recibimos
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    })
});


export default router