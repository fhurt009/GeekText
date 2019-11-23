import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/user/Must-Match.validator';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-changepw',
  templateUrl: './changepw.component.html',
  styleUrls: ['./changepw.component.scss']
})
export class ChangepwComponent implements OnInit {

    changepwForm: FormGroup;
    submitted = false;

    isHidden: boolean = true;
    badPW: string = '';

    userId: number;

    constructor(private formBuilder: FormBuilder, private UserService: UserService, private router: Router) { }

    ngOnInit() {
        this.changepwForm = this.formBuilder.group({
            opassword: ['', Validators.required],
            npassword: ['',
                [Validators.required,
                Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]
            ],
            confirmPassword: ['', Validators.required],
        }, {
            validator: MustMatch('npassword', 'confirmPassword')
        });
        this.UserService.currentUser.subscribe(userId => this.userId = userId);
    }

    // convenience getter for easy access to form fields
    get f() { return this.changepwForm.controls; }

    //testing with a user's id
    id: number;

    //holds password value
    password: string = '';

    //change password button clicked
    onSubmit() {
        this.id = this.userId;
        var $matches: Observable<any>;
        var $newPW: Observable<any>;
        this.submitted = true;

        // stop here if form is invalid
        if (this.changepwForm.invalid) {
            return;
        }

        var opasswordS: string = this.changepwForm.get('opassword').value;
        var npasswordS: string = this.changepwForm.get('npassword').value;

        //checks if password matches
        $matches = this.UserService.pwMatch(this.id, opasswordS);

        //subscribes string value into this.password
        $matches.subscribe(pwMatches => {
            this.password = pwMatches[0].matches;
        });

        (async () => {
            await this.delay(200);

            //if password is incorrect, show error
            if (this.password == 'false') {
                this.isHidden = false;
            }
            //password is correct so it gets replaced. takes you back to the profile page.
            else {
                this.isHidden = true;

                //puts new password in database
                $newPW = this.UserService.changepw(this.id, npasswordS);
                $newPW.subscribe();
               
                this.router.navigate(['/user/profile']);
            }

        })();

    }

    //defines delays in ts
    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
