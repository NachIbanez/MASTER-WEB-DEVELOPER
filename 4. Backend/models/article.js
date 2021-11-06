"use strict"

// Crear modelo del objeto articulo para asi crear nuevos objetos de este tipo o
// poder utilizarlo para conectarnos mediante él a su colección de datos
// Para cada coleccion de datos debemos tener un modelo para asi tener la capa
// de abstraccion intermedia que nos otorgue la capacidad de consulta
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = Schema({
    title: String,
    content: String,
    date: {type: Date, default: Date.now}, // Con el metodo Date se asignara la fecha automaticamente y no habra que asignarla posteriormente
    image: String
});

//Nombre del Modelo --> article ; esquema a utilizar para el modelo --> ArticleSchema
// articles (nombre dado lo pone en minusculas y en plural)--> guarda documentos de este
// tipo y con esta estructura dentro de la coleccion
module.exports = mongoose.model("Article", ArticleSchema);
