import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    profileForm: FormGroup;
    submitted = false;

    isHidden: boolean = true;
    badUsername: string = '';

    constructor(private formBuilder: FormBuilder, private UserService: UserService) { }

    ngOnInit() {
        this.profileForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            nickname: ['', Validators.required],
            opassword: ['', Validators.required],
            npassword: ['', Validators.required],
            confirmPassword: ['', [Validators.required]],
            nameCC: ['', Validators.required],
            ccNUm: ['', Validators.required],
            expire: ['', Validators.required],
            csv: ['', Validators.required],
            nameCC2: ['', Validators.required],
            ccNUm2: ['', Validators.required],
            expire2: ['', Validators.required],
            csv2: ['', Validators.required],
            address: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zip: ['', Validators.required],
            address2: ['', Validators.required],
            city2: ['', Validators.required],
            state2: ['', Validators.required],
            zip2: ['', Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.profileForm.controls; }

    //save changes button clicked
    onSubmit() {

        this.submitted = true;

        // stop here if form is invalid
        if (this.profileForm.invalid) {
            return;
        }
    }


    //defines delays in ts
    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
