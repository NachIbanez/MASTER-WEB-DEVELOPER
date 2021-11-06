"use strict"

// Cargar modulos de node para crear servidor
var express = require("express");
var bodyParser = require("body-parser");

// Ejecutar express (http)
var app = express();

// Cargar ficheros rutas (cargamos modulo creado en routes/article)
var article_routes = require("./routes/article")

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS --> Acceso cruzado entre dominios, para permitir acceso/llamadas HTTP/peticiones AJAX
// o llamadas asíncronas al API desde cualquier frontend con IP diferente
// Configurar cabeceras y CORS usando el siguiente middleware (se ejecuta antes de cualquier metodo que empleemos)
// Permitir que cualquier puedan realizar peticiones con estas cabeceras de diferentes metodos
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Añadir prefijos a rutas / Cargar rutas en express
app.use("/", article_routes);

// Ruta o metodo de prueba para el API REST
// Accion a realizar cuando llegue un metodo POST, recogeremos el contenido del
// body, en este caso en el campo mascota, y añadiremos dicho campo con su
// correspondiente dato del campo (key y value) para enviar a la BBDD en formato JSON

/* Lo comentamos ya que nos llevamos este metodo a article.js del controller
app.post("/datos", (req, res) => {
    var mascota = req.body.mascota;
    return res.status(200).send({
        curso: "Master en frameworks JS",
        alumno: "Nacho Ibanez",
        mascota
    });
});
*/

// Exportar modulo (fichero actual)
module.exports = app;
