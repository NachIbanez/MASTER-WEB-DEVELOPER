// Usamos Express,js para crear y gestionar las rutas de las diferentes acciones creadas en el controlador
"use strict"

var express = require("express");
var ArticleController = require("../controllers/article");

var router = express.Router();

 // Cargar el modulo del multiparty
var multipart = require("connect-multiparty");
 // md-->middleware, una funcionalidad que se ejecuta antes de que llegue a ejectarse
 // el metodo del controlador asignado a la ruta, se le añade como parametro la direccion
 // donde queremos que guarde los archivos que se cargen/suban
var md_upload = multipart({ uploadDir: "./upload/articles"});

// RUTAS DE PRUEBA
router.post("/datos", ArticleController.datos);
router.get("/test-de-controlador", ArticleController.test);

// RUTAS UTILES / RUTAS PARA EL articulo
router.post("/save", ArticleController.save);
router.get("/articles/:last?", ArticleController.getArticles); // /:last? es un parametro opcional(?) para la URL
router.get("/article/:id", ArticleController.getArticle);
router.put("/article/:id", ArticleController.update);
router.delete("/article/:id", ArticleController.delete);
router.post("/upload-image/:id", md_upload, ArticleController.upload); // se le añade el middleware que se le va a aplicar para que pueda procesar los archivos que se le envien
router.get("/get-image/:image", ArticleController.getImage);
router.get("/search/:search", ArticleController.search)

//exportar modulo para poder utilizarlo en cualquier parte
module.exports = router;
