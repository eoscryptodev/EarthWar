import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../../../Core/Services/login.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor( public loginAuthService: LoginService ) { }

  ngOnInit(): void {
  }

}
