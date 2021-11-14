import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Article } from "../../models/article";
import { ArticleService } from "../../services/article.service";
import { Global } from "../../services/global";
import Swal from "sweetalert2";

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string;
  public page_title: string;
  public is_edit: boolean;
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
    this.page_title = "Crear Artículo";
    this.url = Global.url;
    this.is_edit = false;
  }

  ngOnInit(): void {
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
    this._articleService.createArticle(this.article).subscribe(
      response => {
        if (response.status == "success") {
          this.status = "success";
          this.article = response.article;

          // Alerta creada con la libreria sweetalert (swal)
          Swal.fire({
            title: "Artículo creado",
            text: "El artículo se ha creado correctamente",
            icon: "success"
          })

          this._router.navigate(['blog']);
        } else {
          this.status = "error";
        }
      },
      error => {
        console.log(error);
        this.status = "error";
      }
    );
  }

  imageUpload(data) {
    this.article.image = data.body.image;
  }

}
