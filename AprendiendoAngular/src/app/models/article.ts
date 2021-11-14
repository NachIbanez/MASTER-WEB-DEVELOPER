// Crearemos un modelo de tipo Articulo para poder usarlo en Angular, los datos del constructor los sacamos de los campos del objeto articulo creado en el modelo articulo del backend, que se puede ver en POSTMAN
export class Article{

  constructor(
    public _id: string,
    public title: string,
    public content: string,
    public image: string,
    public date: any
  ){}

}
