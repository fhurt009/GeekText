import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    hide = true;//variable for hidden pw

    //variables for signup
    email = new FormControl('', [Validators.required, Validators.email]);
    username = new FormControl('', [Validators.required]);
    pw = new FormControl('', [Validators.required]);
    cpw = new FormControl('', [Validators.required]);
    fname = new FormControl('', [Validators.required]);
    lname = new FormControl('', [Validators.required]);
    address = new FormControl('', [Validators.required]);
    city = new FormControl('', [Validators.required]);
    state = new FormControl('', [Validators.required]);
    zip = new FormControl('', [Validators.required]);
    phone = new FormControl('', [Validators.required]);

    constructor() { }


    //error handler methods for signup
    getErrorMessageEmail() {
        return this.email.hasError('required') ? 'You must enter an email address' :
            this.email.hasError('email') ? 'Not a valid email address' :
                '';
    }

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

    getErrorMessageCPw() {
        return this.cpw.hasError('required') ? 'You must confirm password' :
            this.cpw.hasError('password') ? 'Passwords do not match' :
                '';
    }

    getErrorMessageFname() {
        return this.fname.hasError('required') ? 'You must enter your first name' :
            '';
    }

    getErrorMessageLname() {
        return this.lname.hasError('required') ? 'You must enter your last name' :
            '';
    }

    getErrorMessageAddress() {
        return this.address.hasError('required') ? 'You must enter an address' :
            '';
    }

    getErrorMessageCity() {
        return this.city.hasError('required') ? 'You must enter a city' :
            '';
    }

    getErrorMessageState() {
        return this.state.hasError('required') ? 'You must enter a state' :
            '';
    }

    getErrorMessageZip() {
        return this.zip.hasError('required') ? 'You must enter a zip code' :
            '';
    }

    getErrorMessagePhone() {
        return this.phone.hasError('required') ? 'You must enter a phone number' :
            '';
    }


  ngOnInit() {
  }

}
