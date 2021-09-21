import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent   {

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {

    // Ir al backend
    // un usuario
    this.authService.login()
      .subscribe( resp => {
        console.log(resp);

        if ( resp.id ) {
          this.router.navigate(['./blogs']);
        }
      })
  }

}
