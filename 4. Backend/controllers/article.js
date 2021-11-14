// Clase para tener metodos y rutas relacionados con articulos de nuestra API y backend
"use strict"

// Importar modulo validator, en validator-npm encontraremos todos los metodos de validacion
// disponibles, hay multitud de ellos; en la accion "save" usaremos el metodo "isEmpty"
var validator = require("validator");

// Importar modulo para borrar archivos subidos (file system - fs)
var fs = require("fs");

// Importar modulo para sacar rutas o paths de archivos (path)
var path = require("path");

// Importar el modelo de article creado en models/article para validar los datos
var Article = require("../models/article");

// Creamos un objeto controller con todas las acciones (funciones) y metodos que queremos realizar/tener
var controller = {
    //traemos el metodo post creado en app.js, ahora se llamarán acciones del controlador
    datos: (req, res) => {
        var mascota = req.body.mascota;
        return res.status(200).send({
            curso: "Master en frameworks JS",
            alumno: "Nacho Ibanez",
            mascota
        });
    },
    // accion test que devuelve un string guardado en la variable "message"
    test: (req, res) => {
        return res.status(200).send({
            message: "soy la accion text del controlador de articulos"
        });
    },
    save: (req, res) => {
        // Recoger parametros por post (datos que el usuario envie desde la peticion)
        var params = req.body;
        console.log(params);

        // Validar datos con la libreria validator
        // usaremos try/catch para evitar errores, ya que estos datos son
        // sensibles a causar excepciones
        try{

            var validate_title = !validator.isEmpty(params.title); // Validate_title será true si params.title no esta vacio
            var validate_content = !validator.isEmpty(params.content); // Validate_content será true si params.content no esta vacio

        }catch(err){
            return res.status(200).send({
                status: "error",
                message: "Faltan datos por enviar"
            });
        }

        if(validate_title && validate_content){

            // Crear el objeto (articulo) a guardar, usaremos el modelo article
            //Instanciamos el objeto en la variable article
            var article = new Article();

            // Asignar Valores de los parametros del post recogidos
            // hacia el objeto vacio modelo articulo recien creado
            article.title = params.title;
            article.content = params.content;
            if (params.image) {
              article.image = params.image;
            } else {
              article.image = null;
            }
            // Guardar el articulo en la Base de Datos
            article.save((err, articleStored) => {
                if (err || !articleStored){
                    return res.status(404).send({
                        status: "error",
                        message: "El articulo no se ha guardado"
                    });
                }

                // Devolver una respuesta
                return res.status(200).send({
                    status: "success",
                    article: articleStored
                });
            });

        }else{
            return res.status(200).send({
                status: "error",
                message: "Los datos no son validos"
            });
        }
    },

    //Metodo o accion para sacar por GET todos los articulos
    getArticles: (req, res) => {
        // Usaremos metodo FIND para sacar los datos de las BBDD, realizar una consulta
        var query = Article.find({});

        // Cargamos el parametro opcional last de la URL
        // Si añadimos a la URL cualquier caracter unicamente se mostraran las "limit"
        // entradas mas recientes de la base de datos
        var last = req.params.last;
        var limit = 5;

        if (last || last != undefined){
            query.limit(limit);
        }

        query.sort("-_id").exec((err, articles) => { // Al sacar los datos de la base de datos, los ordenadomos por id de nuevo (mas arriba) a viejo(-_id)
            if (err){
                return res.status(500).send({ // devolver error 500 Internal Server Error
                    status: "error",
                    message: "error al devolver los articulos"
                });
            }

            if (!articles){
                return res.status(404).send({ // devolver error 404 Not Found
                    status: "error",
                    message: "No hay articulos para mostrar"
                });
            }

            return res.status(200).send({
                status: "success",
                articles
            });
        });
    },

    getArticle: (req, res) => {
        // Recoger el id del articulo por la URL
        var articleId = req.params.id;

        // Comprobar que el id existe
        if (!articleId || articleId == null){

            return res.status(404).send({ // devolver error 404
                status: "error",
                message: "No existe un articulo con ese identificador"
            });
        }

        // Buscar el articulo por id que se ha introducido en la url (findById)
        // Los dos primeros condicionales es por si el id introducido no existe
        // o si da un error
        Article.findById(articleId, (err, article) => {
            if(err){
                return res.status(500).send({ // devolver error 500
                    status: "error",
                    message: "Error al devolver los datos"
                });
            }

            if(!article){
                return res.status(404).send({ // devolver error 404
                    status: "error",
                    message: "No existe el articulo"
                });
            }

            // Devolver el articulo en json
            return res.status(200).send({ // devolver el articulo con el id que se habia introducido
                status: "success",
                article
            });

        });
    },

    // Metodo o accion para actualizar articulos
    update: (req, res) => {

        // Recoger el id del articulo por la URL
        var articleId = req.params.id;

        // Recoger los parametros que llegan por el metodo PUT
        var params = req.body;

        // Validar datos con libreria validator usando un try..catch
        try{

            var validate_title = !validator.isEmpty(params.title); // Validate_title será true si params.title no esta vacio
            var validate_content = !validator.isEmpty(params.content); // Validate_content será true si params.content no esta vacio

        }catch(err){
            return res.status(404).send({
                status: "error",
                message: "Faltan datos por enviar"
            });
        }

        if(validate_title && validate_content){

            // Find and Update (buscar por id (_id con el parametro id introducida en la URL)
            // y actualizar los "params" (en este caso seran todos los parametros menos el date)
            // con new:true devuelve el objeto ya actualizado, no el anterior al update)
            Article.findOneAndUpdate({_id: articleId}, params, {new: true}, (err, articleUpdated) =>{
                if(err){
                    return res.status(404).send({
                        status: "error",
                        message: "Error al actualizar"
                    });
                }

                if(!articleUpdated){
                    return res.status(404).send({
                        status: "error",
                        message: "No existe el articulo"
                    });
                }

                return res.status(200).send({
                    status: "success",
                    article: articleUpdated
                });
            });

        } else {
            // Devolver Respuesta
            return res.status(404).send({
                status: "error",
                message: "La validacion no es correcta"
            });
        }
    },

    delete: (req, res) => {

        // Recoger el id del articulo por la URL
        var articleId = req.params.id;

        // Find and Delete
        Article.findOneAndDelete({_id: articleId}, (err, articleRemoved) => {

            if(err){
                return res.status(500).send({
                    status: "error",
                    message: "Error al borrar"
                });
            }

            if(!articleRemoved){
                return res.status(404).send({
                    status: "error",
                    message: "No existe el articulo que se intenta borrar"
                });
            }

            return res.status(200).send({
                status: "success",
                article: articleRemoved
            });
        });
    },

    // Metodo o accion para subir ficheros de tipo imagen a una entrada ya existente
    upload: (req, res) => {

        // Configuramos primero el modulo/libreria connect multiparty en router/article.js
        // Recoger el fichero de la peticiones
        var file_error = "Imagen no subida..."

        if(!req.files){
            return res.status(404).send({
                status: "error",
                message: file_error
            });
        }

        // Conseguir el nombre y extension del archivo
        var file_path = req.files.file0.path; // Coger el campo path de file0 dentro del fichero
        var file_split = file_path.split("\\"); // Trocear el file_path en tantos trozos como "\\" haya en el string

        // *ADVERTENCIA EN LINUX O MAC EL SPLIT HABRIA QUE REALIZARLO CON "/" COMO SEPARADOR*

        // Guardar el nombre del archivo subido
        var file_name = file_split[2]; // File_split es un array con los tres elementos del path completo, y name esta en la posicion 2 (tercer elemento)

        // Extension del fichero
        var file_extension = file_name.split(".")[1];

        // Comprobar la extension (solo imagenes) y si es valida borrar el fichero
        if (file_extension != "png" && file_extension != "jpg" && file_extension != "jpeg" && file_extension != "gif") {

            // Si no pertenece a ninguno de esos cuatro formatos de imagen borramos el archivos
            fs.unlink(file_path, (err) => {

                return res.status(200).send({
                    status: "error",
                    message: "La extension de la imagen no es valida"
                });
            });

        } else {

            // Si es formato correcto sacamos el id del archivo subido
            var articleId = req.params.id;

            if (articleId) {
              // Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
              Article.findOneAndUpdate({_id: articleId}, {image: file_name}, {new: true}, (err, articleUpdated) => {

                  if(err || !articleUpdated){
                      return res.status(404).send({
                          status: "error",
                          message: "Error al guardar la imagen de articulo"
                      });
                  }

                  return res.status(200).send({
                      status: "success",
                      article: articleUpdated
                  });
              });
            } else {
              return res.status(200).send({
                  status: "success",
                  image: file_name
              });
            }

        }
    },

    // Metodo o accion para sacar la imagen de la API o del Backend
    getImage: (req, res) => {

        // Sacar el fichero imagen que nos llega por la URL
        // guardamos en path file el nombre del directorio completo
        var file = req.params.image;
        var path_file = "./upload/articles/" + file;

        //Comprobar si el fichero existe con el paquete file system (fs)
        fs.exists(path_file, (exists) => {

            if(exists){
                //En caso de que el fichero exista usaremos la libreria path para devolver el fichero en crudo
                return res.sendFile(path.resolve(path_file));

            } else {
                // Si no existe enviaremos un mensaje de error 404
                return res.status(404).send({
                    status: "success",
                    message: "La imagen no existe"
                });
            }
        });
    },

    // Metodo o accion para buscar articulos en el API REST empleando un string para buscar coincidencias
    search: (req, res) => {

        // Sacar el string a buscar
        var searchString = req.params.search;

        // Find or --> Para hacer varias condiciones (las condiciones van dentro del parentesis de find), empleamos el operador OR
        Article.find({ "$or": [
             // Si el searchString esta incluido dentro de title o content entonces devolvera los articulos de la coleccion
             // con los que coincida dicha busqueda
            {title: { "$regex": searchString, "$options": "i"}},
            {content: { "$regex": searchString, "$options": "i"}},
        ]})
        .sort([["date", "descending"]]) // Ordenar los articulos de manera descendente por fecha
        .exec((err, articles) => {

            if(err){
                return res.status(500).send({
                    status: "error",
                    message: "Error en la peticion"
                });
            }

            if(!articles || articles.length <= 0){
                return res.status(404).send({
                    status: "error",
                    message: "No hay articulos coincidentes con la busqueda solicitada"
                });
            }

            return res.status(200).send({
                status: "success",
                articles
            });
        });
    }

}; // end controller

module.exports = controller;
