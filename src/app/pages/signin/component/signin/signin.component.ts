import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userName = '';
  password = '';
  errorMessage="";
  loginFlag=false;
  constructor(private _Router: Router) {}

  ngOnInit(): void {}

  // Angular route gurard

  loginFunction() {
    if (this.userName == 'vimal' && this.password == 'password') {
      this._Router.navigateByUrl('/main-page');
    } else {
      this.errorMessage="Username and password is incorrect";
      this.loginFlag=true;
    }
  }
  
  reload(event: any)
  {
    alert(event);
  }

}
