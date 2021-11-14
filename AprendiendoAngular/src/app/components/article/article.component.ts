import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router"; // Tendremos que importar el router para recoger datos de la URL
import { Global } from "../../services/global";
import { ArticleService } from "../../services/article.service";
import { Article } from "../../models/article";
import Swal from "sweetalert2";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: string;
  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => { // De esta manera recogemos el parametro id de la URL
      let id = params["id"];

      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
            console.log(this.article);
          } else {
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }

  delete(id) {
    this._articleService.delete(id).subscribe(
      response => {

        Swal.fire({
          title: "Artículo borrado",
          text: "El artículo se ha eliminado correctamente",
          icon: "warning"
        })

        this._router.navigate(['/blog']);
      },
      error => {
        console.log(error);
        this._router.navigate(['/blog']);
      }
    );
  }

}
