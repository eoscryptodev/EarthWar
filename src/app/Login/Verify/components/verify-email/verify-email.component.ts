import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../../../Core/Services/login.service";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor( public loginAuthService: LoginService ) { }

  ngOnInit(): void {
  }

}
