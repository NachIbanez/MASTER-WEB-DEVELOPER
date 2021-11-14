import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from "../../models/animal"

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  @Input() animal: Animal;
  @Output() MarcarFavorita = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(event, animal: Animal){
    this.MarcarFavorita.emit({
      animal: animal
    });
  }

}
