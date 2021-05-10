import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../../../Core/Services/login.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor( public loginAuthService: LoginService ) { }

  ngOnInit(): void {
  }

}
