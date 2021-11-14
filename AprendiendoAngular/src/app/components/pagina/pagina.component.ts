import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router"; // Cargar los componentes del router para poder regoger parametros de la URL
import { Animal } from "../../models/animal";
import { AnimalService } from "../../services/animal.service"

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css'],
  providers: [AnimalService] // De esta manera ya podremos utilizar el servicio AnimalService en este componente
})
export class PaginaComponent implements OnInit {

  public nombre: string; // Asignamos las propiedades de la clase componente PaginaComponente
  public color: string; // Si da error la inicializacion de esta manera, probar con nombre!
  public animales: Array<Animal>; // Creamos un array con modelo de objeto array Animal que hemos importado, tambien se podria poner Animal[];
  public favorito: Animal;
  public fecha: any;

  constructor(

    // Al declarar una propiedad a través de un servicio el nombre debe empezar con _
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService

  ){
    this.animales = this._animalService.getAnimales();
    this.fecha = new Date(2020,  10, 10);
  }

  ngOnInit(): void {
      console.log(this.animales)
      this._route.params.subscribe((params: Params) => { // con subscribe recogemos los datos que nos devuelve el servicio, en este caso parametros tipo params
      this.nombre = params["nombre"]; // Accedemos al array donde se encuentran los parametros de la URL y se los pasamos a las propiedades del componente PaginaComponent
      this.color = params["color"];

      console.log(this._animalService.holaMundo());


    });

  }

  redireccion(){ // Metodo redireccion automatica
    // Metodo navigate muy comun para realizar redirecciones de este estilo --> redirigira a la direccion /pagina con parametros separados por comas
    // Este ejemplo redirigira a pagina/zorro/naranja en el navegador, esta funcion redireccion se podra asignar aun boton para que realice dicha accion
    this._router.navigate(["/pagina", "Zorro", "Naranja"])
  };

  mostrarFavorita(event){
    this.favorito = event.animal;
  }

}
