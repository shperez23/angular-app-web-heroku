import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../services/blogs.service';
import { Blog } from '../../interfaces/blogs.interface';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
  mat-card{
    margin: 10px;
  }
`
  ]
})
export class ListadoComponent implements OnInit {

  blogs: Blog[]=[];
  pageSlice:Blog[]=[];
  length:number=0;

  constructor(private blogsService: BlogsService ) { }

  ngOnInit(): void {
    this.blogsService.getBlogs()
    .subscribe(res=>{
      this.blogs = res;
      this.length = res.length;
      this.pageSlice =  this.blogs.slice(0,3);
    });
  }


  OnPageChange(event: PageEvent){
    
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex>this.blogs.length) {
      endIndex = this.blogs.length;
    }
    this.pageSlice = this.blogs.slice(startIndex,endIndex);

  }
  

}
