import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Article } from "../../models/article";
import { ArticleService } from "../../services/article.service";
import { Global } from "../../services/global";
import Swal from "sweetalert2";

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html', // Le importaremos la plantilla de la vista HTML del componente new-component
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status: string;
  public is_edit: boolean;
  public page_title: string;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = {
      _id: "",
      title: "",
      content: "",
      image: "",
      date: ""
    };
    this.is_edit = true;
    this.page_title = "Editar Artículo";
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getArticle();
  }

  // Método importado para la subida de archivos
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg", // Formatos o extensiones de imagen permitidos
    maxSize: 50, // En MB
    uploadAPI: {
      url: Global.url + "upload-image/", // URL donde se va a subir la imagen
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    autoUpload: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el artículo',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  onSubmit() {
    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        if (response.status == "success") {
          this.status = "success";
          this.article = response.article;

          // Alerta creada con la libreria sweetalert (swal)
          Swal.fire({
            title: "Artículo editado",
            text: "El artículo se ha editado correctamente",
            icon: "success"
          })

          this._router.navigate(['blog/articulo', this.article._id]);
        } else {
          this.status = "error";
        }
      },
      error => {
        console.log(error);
        this.status = "error";
        // Alerta creada con la libreria sweetalert (swal)
        Swal.fire({
          title: "Artículo no editado",
          text: "El artículo no se ha editado correctamente",
          icon: "error"
        })
      }
    );
  }

  imageUpload(data) {
    this.article.image = data.body.image;
  }

  getArticle(){
    this._route.params.subscribe(params => { // De esta manera recogemos el parametro id de la URL
      let id = params["id"];

      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
            console.log(this.article);
          } else {
            this._router.navigate(['home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['home']);
        }
      )
    })
  }

}
