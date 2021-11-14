import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() nombre: string; // Recibir datos de la propiedad INPUT del componente padre con el decorador @Input() y empleando el mismo nombre de la clase importada
  @Input() size: string; // Recibir propiedad size para modificar el estilo del componente slider

  constructor() { }

  ngOnInit(): void {
  }

}
