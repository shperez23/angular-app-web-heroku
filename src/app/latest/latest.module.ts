import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module'; 
import { FormsModule } from '@angular/forms';
import { LatestRoutingModule } from './latest-routing.module';
import { LatestTarjetaComponent } from './components/latest-tarjeta/latest-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';



@NgModule({
  declarations: [
    ListadoComponent,
    HomeComponent,
    BlogComponent,
    LatestTarjetaComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    LatestRoutingModule,
    FormsModule
  ]
})
export class LatestModule { }
