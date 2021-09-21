import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../interfaces/blogs.interface';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private baseUrl: string = environment.baseUrl;


  constructor(private http: HttpClient) { }

  getBlogs():Observable<Blog[]>{
   return  this.http.get<Blog[]>(`${ this.baseUrl }/articles`)
  }

  getBlogPorId(id:number):Observable<Blog>{
    return  this.http.get<Blog>(`${ this.baseUrl }/articles/${id}`);
   }

   getSugerencias( termino: string ): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${ this.baseUrl }/articles?q=${ termino }&_limit=6`);
  }



  agregarBlog( blog: Blog ): Observable<Blog> {
    return this.http.post<Blog>(`${ this.baseUrl }/articles`, blog );
  }

  actualizarBlog( blog: Blog ): Observable<Blog> {
    return this.http.put<Blog>(`${ this.baseUrl }/articles/${ blog.id }`, blog );
  }

  borrarBlog( id: number ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/articles/${ id }`);
  }


}
