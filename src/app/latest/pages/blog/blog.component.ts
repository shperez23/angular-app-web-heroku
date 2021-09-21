import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Blog } from 'src/app/blogs/interfaces/blogs.interface';
import { BlogsService } from 'src/app/blogs/services/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles:[`
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
    this.router.navigate(['/latest/listado'])
  }

}
