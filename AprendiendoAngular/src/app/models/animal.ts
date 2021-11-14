// Crearemos un modelo del objeto tipo animal para poder usarlo en la aplicacion y lo exportamos para usarlo en cualquier lado

export class Animal {

  constructor(
    public nombre: string,
    public year: number,
    public image: string
  ){}

}
