// Fichero JavaScript de maquetacion web

//Recolectamos elementos del DOM por ID para realizar posteriormente un bucle
//y asi poder hacer una lista de articulos partiendo de uno solo que denominamos
//con el ID article-template, articles es el nombre ID correspondiente al bloque div que engloba
//a toda la seccion de articulos, que el elemento donde se insertaran tantos
//bloques article como se quieran tener
var template = document.getElementById("article-template");
var articles = document.getElementById("articles");

var num_articles = 6

for(var i = 2; i <= num_articles; i++){
    //Se crea una variable donde guardamos un clon del elemento template
    var clonado = template.cloneNode(true);
    //Se le eliminará el ID debido a que en unas buenas practicas html
    //solo podrá tener un identificador determinado un unico elemento
    clonado.removeAttribute("id");
    //Se le añadira un ID unico ayudandonos del iterador del bucle, i
    clonado.setAttribute("id", "article" + i)

    //Se le añadira el nº de articulo incluyendolo en su texto interno de HTML
    var h2 = clonado.getElementsByTagName("h2")[0];
    h2.innerHTML = h2.textContent + ' ' + i;

    //Se añadira el elemento clonado y ligeramente modificado al DOM,
    //concretamente se colgara en el div con ID articles
    articles.appendChild(clonado);
}
