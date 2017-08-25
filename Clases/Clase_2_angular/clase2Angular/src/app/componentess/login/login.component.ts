import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string = "";
  pass : string = "";
  constructor() { }

  ngOnInit() {

  }
  Onclick(){
    console.log("Usuario: "+this.user);
    console.log("Password: "+this.pass);
  }
}
