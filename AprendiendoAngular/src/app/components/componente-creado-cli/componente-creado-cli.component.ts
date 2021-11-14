// Los hook se tienen que importar para poder implementarlo en la exportacion de clase
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-componente-creado-cli',
  templateUrl: './componente-creado-cli.component.html',
  styleUrls: ['./componente-creado-cli.component.css']
})

// Los Hook (eventos del ciclo de vida de un componente, son metodos que se ejecutan a medida que el componente se inciia, cambia, etc), hay varios tipos:
//  -OnInit, se ejecutan al iniciar un componente
//  -DoCheck, se ejecuta al realizar un cambio en un componete, son eventos que se ejecutan con mucha frecuencia
//  -OnDestroy, se ejecuta al eliminar un componente

export class ComponenteCreadoCliComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;

  constructor() {
    this.titulo = "titulo componete creado cli"

  }

  cambiarTitulo(){
    this.titulo = "El titulo se ha cambiado"
  }

  ngOnInit(): void {
      console.log("componente iniciado");
  }

  ngDoCheck(): void {
      console.log("componente modificado");
  }

  ngOnDestroy(): void {
      console.log("el componente se va a eliminar ");
  }

}
