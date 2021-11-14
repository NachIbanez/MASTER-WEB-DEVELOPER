import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // Vincularemos los diferentes inputs del formulario en html para tener un objeto modelo con todos sus datos
  public user: any;
  public campo: string;

  constructor() {
    this.user = {
      nombre: "",
      apellidos: "",
      biografia: "",
      genero: ""
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("formulario enviado correctamente");
    console.log(this.user);
  }

  hasDadoClick(){
    alert("hola");
  }

  hasSalido(){
    alert("has salido del input o has pulsado enter");
  }

}
