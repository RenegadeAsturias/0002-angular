import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { Error404Component } from './error404/error404.component';
import { DetallesComponent } from './detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeroComponent,
    SegundoComponent,
    ListaDeLibrosComponent,
    AcercaDeComponent,
    EncabezadoComponent,
    Error404Component,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
