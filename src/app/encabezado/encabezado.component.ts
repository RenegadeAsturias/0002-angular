import { Component } from '@angular/core';
import { Libro } from '../lista-de-libros/Libro';
import { LibrosSeleccionadosService } from '../libros-seleccionados.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  mostrarLista:boolean = true;

  constructor(public servicioLibrosSeleccionados:LibrosSeleccionadosService){

  }

  agregarLibro(_libro:Libro){
    console.log("LIBRO.ID="+_libro.id);
    this.servicioLibrosSeleccionados.agregarLibroSeleccionado(_libro);
  }

}
