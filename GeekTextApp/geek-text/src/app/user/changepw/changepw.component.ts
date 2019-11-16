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

    constructor(private formBuilder: FormBuilder, private UserService: UserService, private router: Router) { }

    ngOnInit() {
        this.changepwForm = this.formBuilder.group({
            opassword: ['', Validators.required],
            npassword: ['',
                Validators.required,
                Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')],
            confirmPassword: ['', Validators.required],
        }, {
            validator: MustMatch('npassword', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.changepwForm.controls; }

    //change password button clicked
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.changepwForm.invalid) {
            return;
        }
    }

}
