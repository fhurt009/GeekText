import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    submitted = false;

    isHidden: boolean = true;
    badLogin: string = '';

    constructor(private formBuilder: FormBuilder, private UserService: UserService, private router: Router) { }

    //run on launch
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    //holds id value
    id: number = 0;

    //login button clicked
    onSubmit() {
        var $id: Observable<any>;
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        //saves values from forms as a string
        var usernameS: string = this.loginForm.get('username').value;
        var passwordS: string = this.loginForm.get('password').value;

        //saves observable object into ad from UserService with username and password parameters
        $id = this.UserService.userLogin(usernameS, passwordS);

        //subscribes user id into first index of login array
        $id.subscribe(login => {
            this.id = login[0].id;
            console.log('users Id: '+ this.id); //remove @ final product
        });

        //valid login redirects you to home page
        (async () => {
            await this.delay(1000);

            //redirects to homepage if the id is no longer 0 (a user is logged in)
            if (this.id != 0) {
                this.router.navigate(['']);
                this.isHidden = true;
            }
            //incorrect login information, making warning visible
            else {
                this.isHidden = false;
            }
        })();
    }

    //defines delays in ts
    delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
}
