import { Component, OnInit } from '@angular/core';

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

  rut: string = ""
  password: string = ""


  constructor() { }

  ngOnInit() {
  }

  iniciarSesion()
  {
    console.log("rut"+this.formLogin.rut);
    console.log("password"+this.formLogin.password);
  }

}
