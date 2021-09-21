import { NgModule } from '@angular/core'; 
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

import { CommonModule } from '@angular/common';
import { BlogsRoutingModule } from './blogs-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BlogTarjetaComponent } from './components/blog-tarjeta/blog-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BlogComponent,
    HomeComponent,
    ListadoComponent,
    BuscarComponent,
    BlogTarjetaComponent,
    ImagenPipe,
    ConfirmarComponent  
    
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    BlogsRoutingModule,
    FormsModule   
  ]
})
export class BlogsModule { }
