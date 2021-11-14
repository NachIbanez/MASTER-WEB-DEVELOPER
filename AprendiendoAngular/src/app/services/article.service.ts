
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"; // Con HttpClient podremos realizar peticiones AJAX al backend ; HttpHeaders permite manipular las peticiones AJAX y poder enviar más datos
import { Observable } from "rxjs"; // Esta libreria permite recoger los datos que nos devuelve la API
import { Article } from "../models/article";
import { Global } from "./global";

@Injectable()

export class ArticleService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  pruebas() {
    return ("Soy el servicio de articulos");
  }

  getArticles(last: any = null): Observable<any> {

    var articles = "articles";

    if (last != null) {
      var articles = "articles/true";
    }

    return this._http.get(this.url + "articles"); // peticion AJAX
  }

  getArticle(articleId): Observable<any> {
    return this._http.get(this.url + "article/" + articleId);
  }

  search(searchString): Observable<any> {
    return this._http.get(this.url + "search/" + searchString);
  }

  createArticle(article): Observable<any> {
    let params = JSON.stringify(article); // Transformar el objeto literal de JS a formato JSON string, ya que los datos que se envian por http tienen que ser string o numeros
    let headers = new HttpHeaders().set("Content-Type", "application/json"); // Añadimos una cabecera HTTP del tipo de contenido, que van a ser unos datos en JSON, para nodejs sera de esta manera

    return this._http.post(this.url + "save", params, { headers: headers }); // Realizaremos una peticion post a la URL que teniamos definida en el Backend para crear articulos
  }

  update(id, article): Observable<any> {
    //let params = JSON.stringify(article);
    let headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.put(this.url + "article/" + id, article, {headers: headers}); // Realizaremos una peticion PUT para editar la informacion de un articulo guardado en el backend conociendo su id y el articulo a modificar
  }

  delete(id): Observable<any> {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.delete(this.url + "article/" + id, {headers: headers});
  }

}
