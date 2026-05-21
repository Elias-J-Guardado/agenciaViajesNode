import { render } from "pug"
import { Viaje } from "../models/Viaje.js"
import { Testimonial } from "../models/Testimoniales.js"

const paginaInicio = async (req, res) => { // req - lo que enviamos : res - lo que recibimos

    //consultar 3 viajes del modelo viaje
    try {
        const viajes = await Viaje.findAll({limit: 3});


        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes
        })
    } catch (error) {
        console.log(error)
    }
}

const paginaNosotros = (req, res) => { // req - lo que enviamos : res - lo que recibimos
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => { // req - lo que enviamos : res - lo que recibimos
    //consultar base de datos
    const viajes = await Viaje.findAll();
    console.log(viajes);

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    })
}

//muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug } });

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.error(error)
    }
}

const paginaTestimoniales = async (req, res) => { // req - lo que enviamos : res - lo que recibimos 
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log(error)
    }


}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}