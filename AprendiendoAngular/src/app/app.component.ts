import { Component } from '@angular/core';

// Decorador, modifica el comportamiento y parametro que tiene la clase Component
@Component({
  selector: 'app-root', // Etiqueta que va a mostrar dentro de angular que se utilizara en el index.html
  templateUrl: './app.component.html', // Vista asociada al componente (clase), el templete es la vista (lo que se muestra al usuario)
  styleUrls: ['./app.component.css'] // Propiedad para agregar hojas de estilo a ese componente
})
export class AppComponent {
  public title = 'AprendiendoAngular';
}
