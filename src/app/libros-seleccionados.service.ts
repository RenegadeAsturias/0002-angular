import { Injectable } from '@angular/core';
import { Libro } from './lista-de-libros/Libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosSeleccionadosService {

  lstLibros:Array<Libro> = [];
  librosSeleccionados:Array<Libro>;
  libroAniadido:Libro|undefined;

  constructor() { 
    this.librosSeleccionados = [];
  }

  agregarLibroSeleccionado(libro_:Libro) {
    this.libroAniadido = this.librosSeleccionados.find(li=>li.id==libro_.id);
    if(this.libroAniadido==undefined) {
      this.librosSeleccionados.push(libro_);
    }
  }

  mostrarLibros() {
    if(this.librosSeleccionados.length>0) {
      return this.librosSeleccionados;
    } else {
      return false; // Para ocultar el listado si no hay libros seleccionados
    }
  }

  getLibros(){
    if(this.librosSeleccionados.length>0) {
      this.lstLibros = this.librosSeleccionados;
    }
    return this.lstLibros;
  }
  
}
