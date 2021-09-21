import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../interfaces/blogs.interface';
import { switchMap } from 'rxjs/operators';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: [`
      img{
        width:100%;
        border-radius:5px;
      } 
    `
  ]
})
export class BlogComponent implements OnInit {

  blog!:Blog;

  constructor(private activatedRoute:ActivatedRoute,
              private blogService: BlogsService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe
    (
      switchMap(({id})=>this.blogService.getBlogPorId(id))
    )
    .subscribe(blog=>this.blog=blog);
  }

  regresar(){
    this.router.navigate(['/blogs/listado'])
  }

}
