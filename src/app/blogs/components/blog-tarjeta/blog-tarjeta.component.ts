import { Component, Input } from '@angular/core';
import { Blog } from '../../interfaces/blogs.interface';

@Component({
  selector: 'app-blog-tarjeta',
  templateUrl: './blog-tarjeta.component.html',
  styles:[`
      mat-card{
        margin: 10px;
      }
    `
  ] 
})
export class BlogTarjetaComponent {

   @Input() blog!: Blog;

}
