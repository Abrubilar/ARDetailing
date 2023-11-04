import { Component, OnInit } from '@angular/core';
import { Navigation, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin = {
    rut: "",
    password: ""
  }

  constructor (private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion()
  {


    console.log("rut"+this.formLogin.rut)
    console.log("password"+this.formLogin.password)

    let datosEnviar : NavigationExtras = {
      queryParams: {
        rutUsuario: this.formLogin.rut,
        edad: 30
        
      }
    }

    this.router.navigate(['/home'], datosEnviar);

  }

}
