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

    isHidden: boolean = true;
    badUsername: string = '';

    constructor(private formBuilder: FormBuilder, private UserService: UserService, private router: Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['',
                [Validators.required,
                Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]
            ],
            confirmPassword: ['', Validators.required],
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    //holds username value
    username: string = '';

    //register button clicked
    onSubmit() {
        var $taken: Observable<any>;
        var $newUser: Observable<any>;
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

        //checks if username is taken
        $taken = this.UserService.uniqueUsername(usernameS);

        //subscribes string value into this.username
        $taken.subscribe(is_Taken => {
            this.username = is_Taken[0].is_taken;
        });

        //validates username
        (async () => {
            await this.delay(200);

            //if username is taken, show error
            if (this.username == 'true') {
                this.isHidden = false;
            }
            //username is not taken and registration was successful. takes you to login page to login
            else {
                this.isHidden = true;

                //posts new user in database
                $newUser = this.UserService.register(usernameS, passwordS, emailS, fNameS, lNameS);
                $newUser.subscribe();

                this.router.navigate(['/user/login']);
            }

        })();

    }

    //defines delays in ts
    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
