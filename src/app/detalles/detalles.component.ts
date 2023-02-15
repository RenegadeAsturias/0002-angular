import { Component } from '@angular/core';
import { Libro } from '../lista-de-libros/Libro';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {

  libros:Array<Libro>;

  constructor(private ruta:ActivatedRoute) {
    this.libros = [
      {id:1, titulo:'Lunes al sol', tematica:'Ciencia', precio:25 },
      {id:2, titulo:'Martes al sol', tematica:'Misterio', precio:28 },
      {id:3, titulo:'Miércoles al sol', tematica:'Humor', precio:30 },
    ]
  }

  libroId:any;
  libroSeleccionado:any;

  ngOnInit() {
    // Lee el parámetro libroId de la URL
    this.libroId = this.ruta.snapshot.paramMap.get('libroId');
    this.libroSeleccionado = this.encontrarLibro();
  }

  encontrarLibro() {
    return this.libros.filter((libro)=>libro.id==this.libroId)[0];
  }

}
