// Fichero de conexion a la base de datos
//use strict para mejorar codigo
"use strict"
//cargar modulo mongoose de nodejs
var mongoose = require("mongoose");
var app = require("./app");
var port = 3900;

mongoose.Promise = global.Promise; //Evitar fallos al conectarse con mongoose
//conexion a mongodb
mongoose.connect("mongodb://localhost:27017/api_rest_blog", {useNewUrlParser: true}).then(() => {
    console.log("Conexion a la base de datos realizada correctamente!");

    // Crear servidor y ponerme a escuchar peticiones HTTP
    app.listen(port, () => {
        console.log("Servidor corriendo en http://localhost:" + port);
    });
});
