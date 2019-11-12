import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    //profile variables
    email = new FormControl('', [Validators.required, Validators.email]);
    username = new FormControl('', [Validators.required]);
    fname = new FormControl('', [Validators.required]);
    lname = new FormControl('', [Validators.required]);

    panelOpenState = false; //sets both billing and cc expansions closed

    //billing variables
    address = new FormControl('', [Validators.required]);
    city = new FormControl('', [Validators.required]);
    state = new FormControl('', [Validators.required]);
    zip = new FormControl('', [Validators.required]);

    //cc variables
    nameCC = new FormControl('', [Validators.required]);
    ccNum = new FormControl('', [Validators.required]);
    expire = new FormControl('', [Validators.required]);
    csv = new FormControl('', [Validators.required]);

    hide = true; //variable for hidden pw

    //change password variables
    oldpw = new FormControl('', [Validators.required]);
    newpw = new FormControl('', [Validators.required]);
    cpw = new FormControl('', [Validators.required]);

    constructor() { }

    //error handler methods for profile
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

    getErrorMessageFname() {
        return this.fname.hasError('required') ? 'You must enter your first name' :
            '';
    }

    getErrorMessageLname() {
        return this.lname.hasError('required') ? 'You must enter your last name' :
            '';
    }

    //error handler methods for billing
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


    //error handler methods for cc
    getErrorMessageNameCC() {
        return this.nameCC.hasError('required') ? 'You must enter the cardholders name' :
            '';
    }

    getErrorMessageccNum() {
        return this.ccNum.hasError('required') ? 'You must enter the cards number' :
            this.ccNum.hasError('ccNum') ? 'Invalid card number' :
                '';
    }

    getErrorMessageExpire() {
        return this.expire.hasError('required') ? 'You must enter a valid expliration date' :
            this.expire.hasError('expire') ? 'Card expired' :
                '';
    }

    getErrorMessageCSV() {
        return this.csv.hasError('required') ? 'You must enter a valid CSV' :
            '';
    }


    //error handler methods for change password
    getErrorMessageOldPw() {
        return this.oldpw.hasError('required') ? 'You must enter your old password' :
            this.oldpw.hasError('password') ? 'Not a valid password' :
                '';
    }

    getErrorMessageNewPw() {
        return this.newpw.hasError('required') ? 'You must enter a new password' :
            this.newpw.hasError('password') ? 'Not a valid password' :
                '';
    }

    getErrorMessageCPw() {
        return this.cpw.hasError('required') ? 'You must confirm password' :
            this.cpw.hasError('password') ? 'Passwords do not match' :
                '';
    }

  ngOnInit() {
  }

}
