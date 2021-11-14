// Crearemos las rutas a los diferentes componentes principales o secciones web (home, blog, formulario, etc)

// Importar los modulos del router de Angular

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Importar componentes a los cuales queremos hacer una pagina/seccion de mi pagina web
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PaginaComponent } from "./components/pagina/pagina.component";
import { ComponentePrueba } from "./components/componente-prueba/componente-prueba.component";
import { ErrorComponent } from "./components/error/error.component";
import { ArticleComponent } from "./components/article/article.component";
import { SearchComponent } from "./components/search/search.component";
import { ArticleNewComponent } from "./components/article-new/article-new.component";
import { ArticleEditComponent } from "./components/article-edit/article-edit.component";

// Array de rutas - Configuracion de las rutas que se desean crear (para las URLs del navegador web)

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "blog", component: BlogComponent},
    {path: "blog/articulo/:id", component: ArticleComponent},
    {path: "blog/crear", component: ArticleNewComponent},
    {path: "blog/editar/:id", component: ArticleEditComponent},
    {path: "buscar/:search", component: SearchComponent},
    {path: "formulario", component: FormularioComponent},
    {path: "pagina", component: PaginaComponent},
    {path: "pagina/:nombre/:color", component: PaginaComponent},
    {path: "prueba", component: ComponentePrueba}, // con /:nombre estamos añadiendo un parametro obligatorio a la ruta
    {path: "**", component: ErrorComponent} // El path "**" significa que cuando la ruta no exista redirigirá siempre a esta ruta
];

// Exportar modulo del router o modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); //Cargar configuracion de en el array appRoutes
