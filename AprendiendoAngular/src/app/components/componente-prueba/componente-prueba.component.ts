// Crear componente de prueba con TypeScript (ts)
// Importamos la clase component del modulo core de angular
import {Component} from "@angular/core";

// Usamos el decorador @Component para indicar las caracteristicas y propiedades de este componente (nunca cerrar con ; al final del decorador)
// Las propiedades mas importantes son:
// selector --> para indicar el nombre de la etiqueta html que se va a generar
// template --> para indicar la vista asociada al componente
@Component({
    selector: "componente-prueba",
    // usando {{}} como se hace en la propiedad template se realiza binding (union) por interpolacion, unir una propiedad a la vista del html
    templateUrl: "./componente-prueba.component.html"
})

export class ComponentePrueba{

    // Definir propiedades de la clase ComponentePrueba y se le puede asignar un tipo de dato
    // (si ponemos public delante la propiedad o metodo sera visible desde fuera de la clase)
    // con private o protected podemos bloquear en el compilador el uso de ciertos metodos o propiedades
    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarComponente: boolean;

    constructor(){
        this.titulo = "SOY EL TITULO DEL COMPONENTE DE PRUEBA";
        this.comentario = "soy un simple comentario de prueba guardado en la propiedad comentario del componente de prueba";
        this.year = 2021;
        this.mostrarComponente = true;

        console.log("Componente cargado");
        console.log(this.titulo, this.comentario, this.year);

    }

    ocultarComponente(){
      this.mostrarComponente = false;
    }
}
