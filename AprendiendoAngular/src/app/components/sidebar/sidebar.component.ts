import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router"; // Tendremos que importar el router para recoger datos de la URL


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public searchString: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  goSearch() {
    this._router.navigate(["/buscar", this.searchString]); // Redireccionar a la URL que le añadimos ([ruta])
  }

}
