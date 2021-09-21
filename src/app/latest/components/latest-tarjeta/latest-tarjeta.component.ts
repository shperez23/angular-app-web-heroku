import { Component, Input } from '@angular/core'; 
import { Blog } from 'src/app/blogs/interfaces/blogs.interface';

@Component({
  selector: 'app-latest-tarjeta',
  templateUrl: './latest-tarjeta.component.html',
  styles: [`
        mat-card{
          margin: 10px;
        }
      `
      ] 
})

export class LatestTarjetaComponent { 

  
  @Input() blog!: Blog; 
}

