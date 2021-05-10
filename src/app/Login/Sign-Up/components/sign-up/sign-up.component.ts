import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from "../../../../Core/Services/login.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit
{

  constructor( public loginAuthService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  hasAccount( pageName: string )
  {
    this.router.navigate(['/'+pageName]);
  }


}
