"use strict"

// Cargar modulos de node para crear servidor
var express = require("express");
var bodyParser = require("body-parser");

// Ejecutar express (http)
var app = express();

// Cargar ficheros rutas

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS

// Añadir prefijos a rutas

// Ruta o metodo de prueba para el API REST
// Accion a realizar cuando llegue un metodo POST, recogeremos el contenido del
// body, en este caso en el campo mascota, y añadiremos dicho campo con su
// correspondiente dato del campo (key y value) para enviar a la BBDD en formato JSON
app.post("/datos", (req, res) => {
    var mascota = req.body.mascota;
    return res.status(200).send({
        curso: "Master en frameworks JS",
        alumno: "Nacho Ibanez",
        mascota
    });
});

// Exportar modulo (fichero actual)
module.exports = app;
