// Crearemos métodos con una logica determinada en un servicio para abstraerlo del componente
// Importamos Injectable para así poder implementar la clase servicio creada sin necesidad de importar a mano
import { Injectable } from "@angular/core";
import { Animal } from "../models/animal";

@Injectable()

export class AnimalService {

  public animales: Animal[];

  constructor() {
    this.animales = [
      new Animal("Zorrito", 2021, "https://estaticos.muyinteresante.es/media/cache/1000x460_thumb/uploads/images/gallery/5f4ed2dd5cafe83e1ab75516/7-zorro-rojo-en-el-bosque.jpg"),
      new Animal("Buhito", 2020, "https://okdiario.com/img/2019/06/04/buho-655x368.jpg"),
      new Animal("Gatito", 2019, "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/60dd8da05bafe884f4c6c56c/gato-slide.jpg")
    ];
  }

  holaMundo(){
    return "Hola mundo desde un servicio de Angular";
  }

  getAnimales() {
    return this.animales;
  }
}
