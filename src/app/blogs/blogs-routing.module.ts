import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes=[
  {
    path: '',
    component: HomeComponent,
    children:[
      {path:'listado',component: ListadoComponent},
      {path:'agregar',component: AgregarComponent},
      {path:'editar/:id',component: AgregarComponent},
      {path:'buscar',component: BuscarComponent},
      {path:':id',component: BlogComponent},
      {path:'**',redirectTo: 'listado'}
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class BlogsRoutingModule { }
