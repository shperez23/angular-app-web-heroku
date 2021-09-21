import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../interfaces/blogs.interface';
import { BlogsService } from '../../services/blogs.service';
import { switchMap } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
      img{
        width:100%;
        border-radius:5px;
      }  
  `
  ]
})


export class AgregarComponent implements OnInit {

  blog:Blog={
    id:0,
    content:'',
    publishedAt: new Date,
    description:'',
    title:'',
    image:'',
    url:''
  }

  constructor(private blogService:BlogsService,
              private activatedRoute:ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    if( !this.router.url.includes('editar') ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.blogService.getBlogPorId( id ) )
      )
      .subscribe( blog => this.blog = blog );
  }
 

  guardar() {
    
    if( this.blog.title.trim().length === 0  ) {
      return;
    }

    if ( this.blog.id ) {
      // Actualizar
      this.blogService.actualizarBlog( this.blog )
        .subscribe( blog => this.mostrarSnakbar('Registro actualizado'));

    } else {
      // Crear
      this.blogService.agregarBlog( this.blog )
        .subscribe( blog => {
          this.router.navigate(['/heroes/editar', blog.id ]);
          this.mostrarSnakbar('Registro creado');
        })
    }

  }


  borrarBlog() {

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.blog
    });

    dialog.afterClosed().subscribe(
      (result) => {

        if( result ) {
          this.blogService.borrarBlog( this.blog.id! )
            .subscribe( resp => {
              this.router.navigate(['/blogs']);
            });
        }
        
      }
    )



  }

  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, 'ok!', {
      duration: 2500
    });

  }



}
