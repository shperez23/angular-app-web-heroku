import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';



const routes: Routes=[
    {
      path: '',
      component: HomeComponent,
      children:[
        {path:'listado',component: ListadoComponent}, 
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
  export class LatestRoutingModule { }

