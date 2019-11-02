import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    hide = true; //variable for hidden pw

    //variables for login
    username = new FormControl('', [Validators.required]);
    pw = new FormControl('', [Validators.required]);

    constructor() { }


    //error handler methods for login
    getErrorMessageUsername() {
        return this.username.hasError('required') ? 'You must enter a username' :
            this.username.hasError('username') ? 'Not a valid username' :
            '';
    }
    getErrorMessagePw() {
        return this.pw.hasError('required') ? 'You must enter a password' :
            this.pw.hasError('password') ? 'Not a valid password' :
                '';
    }

  ngOnInit() {
  }

}
