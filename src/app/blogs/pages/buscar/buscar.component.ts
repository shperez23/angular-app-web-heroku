import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Blog } from '../../interfaces/blogs.interface';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string='';
  blogs: Blog[]=[];
  blogSeleccionado: Blog | undefined;


  constructor(private blogService: BlogsService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.blogService.getSugerencias(this.termino)
    .subscribe(blogs=>this.blogs=blogs);
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){

    if(!event.option.value)
      {
        this.blogSeleccionado=undefined;
        //console.log("No hay valor");
        return;
      }

    const blog: Blog = event.option.value;
    this.termino=blog.title;



    this.blogService.getBlogPorId(blog.id!)
        .subscribe(blog=>this.blogSeleccionado=blog);

  }

}
