import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';
import { Error404Component } from './error404/error404.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'lista-libros' },
  { path:'primero', component:PrimeroComponent }, 
  { path:'segundo', component:SegundoComponent },
	{ path:'lista-libros', component:ListaDeLibrosComponent }, 
	{ path:'acerca-de', component:AcercaDeComponent },
  { path:'detalles/:libroId', component:DetallesComponent },
  { path:'**', component:Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
