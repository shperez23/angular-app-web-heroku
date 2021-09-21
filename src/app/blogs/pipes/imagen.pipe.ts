import { Pipe, PipeTransform } from '@angular/core';
import { Blog } from '../interfaces/blogs.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(blog: Blog): string {
    if(!blog.id){
      return 'assets/no-image.png';
    }
    else{
      if (!blog.image) {
        return 'assets/no-image.png';
      }
      else{
        return blog.image;
      }      
    }      
  }

}
