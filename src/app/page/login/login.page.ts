import { Component, OnInit } from '@angular/core';
import { Navigation, NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authState = false;

  formLogin = {
    rut: "",
    password: ""

  }

  constructor (private router: Router, private storage: Storage, private authService: AuthService) { }

  async ngOnInit() {
    await this.storage.create();
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

    this.authService.login(this.formLogin.rut, this.formLogin.password);
    /*if(this.formLogin.rut == "1-2" && this.formLogin.password == "123"){
      this.storage.set("nombreUsuario", "Juan");
      this.authState = true;
    } else{
      console.log("Usuario incorrecto");
      this.authState = false;
    } */
    //guardar informacion en el storage
  
  }

  isAuthenticated(){
    return this.authState;
  }

}
