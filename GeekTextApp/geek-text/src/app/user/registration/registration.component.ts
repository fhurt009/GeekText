import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/user/Must-Match.validator';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private UserService: UserService, private router: Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
        }, {
            validator: MustMatch('password', 'confirmPassword')
            //add password criteria validator
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

  //register button clicked
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        var usernameS: string = this.registerForm.get('username').value;
        var passwordS: string = this.registerForm.get('password').value;
        var fNameS: string = this.registerForm.get('firstName').value;
        var lNameS: string = this.registerForm.get('lastName').value;
        var emailS: string = this.registerForm.get('email').value;

        /*
        make sure username is unique with uniqueUsername

        use service to add all strings of forms
        $id = this.UserService.userLogin(usernameS, passwordS);

        then subscribe them appropriately
        $id.subscribe(login => {
            this.id = login[0].id;
        });

        async to validate

        then route to the login page

        ======================= To Do =======================
        -fix API for unique usernames
        -fix API for user registration
        -finish registration.component.ts
        */

        
    }
}
