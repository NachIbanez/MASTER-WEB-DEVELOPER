import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from "@angular/forms"; // Indispensable para poder realizar formularios reactivos correctamente en Angular
import { HttpClientModule } from "@angular/common/http";
import { MomentModule } from "ngx-moment"; // Libreria para formatear fechas en la vista http (hace x tiempo)
import { AngularFileUploaderModule } from "angular-file-uploader"; // Libreria para subir ficheros de manera externa

import { AppComponent } from './app.component';
import { ComponentePrueba } from './components/componente-prueba/componente-prueba.component';
import { ComponenteCreadoCliComponent } from './components/componente-creado-cli/componente-creado-cli.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { AnimalComponent } from './components/animal/animal.component';
import { EsParPipe } from "./pipes/espar.pipe";
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

@NgModule({
  declarations: [ // Para utilizar ese componente en cualquier parte de la aplicacion se importa en este modulo y luego se declara en declarations
    AppComponent,
    ComponentePrueba,
    ComponenteCreadoCliComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    ErrorComponent,
    AnimalComponent,
    EsParPipe,
    ArticlesComponent,
    ArticleComponent,
    SearchComponent,
    ArticleNewComponent,
    ArticleEditComponent
  ],
  imports: [ // Cargar los modulos de la aplicacion que se quiere utilizar
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AngularFileUploaderModule
  ],
  providers: [appRoutingProviders], // Cargar servicios
  bootstrap: [AppComponent] // Cargar componente principal por el cual se entrara a este modulo en concreto
})
export class AppModule { }
