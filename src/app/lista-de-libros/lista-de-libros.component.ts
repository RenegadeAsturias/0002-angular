import { Component } from '@angular/core';
import { Libro } from './Libro';

@Component({
  selector: 'app-lista-de-libros',
  templateUrl: './lista-de-libros.component.html',
  styleUrls: ['./lista-de-libros.component.css']
})
export class ListaDeLibrosComponent {

  libros:Array<Libro>;

  constructor() {
    this.libros = [
      {id:1, titulo:'Lunes al sol', tematica:'Ciencia', precio:25 },
      {id:2, titulo:'Martes al sol', tematica:'Misterio', precio:28 },
      {id:3, titulo:'Miércoles al sol', tematica:'Humor', precio:30 },
    ]
  }

}
