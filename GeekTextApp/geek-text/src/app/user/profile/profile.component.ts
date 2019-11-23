import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, MinLengthValidator } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from "@angular/router";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    profileForm: FormGroup;
    submitted = false;
    userId: number;

    isHiddenUname: boolean = true;
    badUsername: string = '';

    isHiddenInvalidCC: boolean = true;
    isHiddenExpiredCC: boolean = true;
    isHiddenInvalidMM: boolean = true;
    invalidCard: string = '';
    expiredCC: string = '';
    invalidMM: string = '';
    isHiddenInvalidCC2: boolean = true;
    isHiddenExpiredCC2: boolean = true;
    isHiddenInvalidMM2: boolean = true;
    invalidCard2: string = '';
    expiredCC2: string = '';
    invalidMM2: string = '';
    isHiddenInvalidCC3: boolean = true;
    isHiddenExpiredCC3: boolean = true;
    isHiddenInvalidMM3: boolean = true;
    invalidCard3: string = '';
    expiredCC3: string = '';
    invalidMM3: string = '';

    isHiddenCCtext: boolean = true;
    isHiddenCCtext2: boolean = true;
    isHiddenCC: boolean = true;
    isHiddenCC2: boolean = true;

    isHiddenSAtext: boolean = true;
    isHiddenSAtext2: boolean = true;
    isHiddenSA: boolean = true;
    isHiddenSA2: boolean = true;


    addCC() {
        if (this.isHiddenCC == true) {
            this.isHiddenCC = false;
            this.isHiddenCCtext = false;
        }
        else {
            this.isHiddenCC = true;
            this.isHiddenCCtext = true;
        }
    }

    addCC2() {
        if (this.isHiddenCC2 == true) {
            this.isHiddenCC2 = false;
            this.isHiddenCCtext2 = false;
        }
        else {
            this.isHiddenCC2 = true;
            this.isHiddenCCtext2 = true;
        }
    }

    addAddress() {
        if (this.isHiddenSA == true) {
            this.isHiddenSA = false;
            this.isHiddenSAtext = false;
        }
        else {
            this.isHiddenSA = true;
            this.isHiddenSAtext = true;
        }
    }

    addAddress2() {
        if (this.isHiddenSA2 == true) {
            this.isHiddenSA2 = false;
            this.isHiddenSAtext2 = false;
        }
        else {
            this.isHiddenSA2 = true;
            this.isHiddenSAtext2 = true;
        }
    }

    constructor(private formBuilder: FormBuilder, private UserService: UserService, private router: Router) { }

    id: number;
    oUsername = '';
    oEmail = '';
    oFirstname = '';
    oLastname = '';
    oNickname = '';
    oNameCC = '';
    oCCnum = '';
    oExpire = '';
    oCSV = '';
    oNameCC2 = '';
    oCCnum2 = '';
    oExpire2 = '';
    oCSV2 = '';
    oNameCC3 = '';
    oCCnum3 = '';
    oExpire3 = '';
    oCSV3 = '';
    oAddress = '';
    oCity = '';
    oState = '';
    oZip = '';
    oAddress2 = '';
    oCity2 = '';
    oState2 = '';
    oZip2 = '';
    oAddress3 = '';
    oCity3 = '';
    oState3 = '';
    oZip3 = '';

    ngOnInit() {
        this.UserService.currentUser.subscribe(userId => this.userId = userId);
        this.id = this.userId;
        var $getUser: Observable<any>;

        //gets users data to put into forms
        $getUser = this.UserService.getData(this.id);

        //subscribes string value into this.password
        $getUser.subscribe(user => {
            this.oUsername = user[0].username,
                this.oEmail = user[0].email,
                this.oFirstname = user[0].firstname,
                this.oLastname = user[0].lastname,
                this.oNickname = user[0].nickname;
        });

        (async () => {
            await this.delay(500);

            this.profileForm = this.formBuilder.group({
                username: [this.oUsername, Validators.required],
                email: [this.oEmail, Validators.required],
                firstName: [this.oFirstname, Validators.required],
                lastName: [this.oLastname, Validators.required],
                nickname: [this.oNickname],
                nameCC: [this.oNameCC, Validators.required],
                ccNum: [this.oCCnum,
                [Validators.required,
                    Validators.pattern('(?=.*[0-9]).{16,16}')]],
                expire: [this.oExpire,
                [Validators.required,
                Validators.pattern('(?=.*[0-9]).{4,4}')]],
                csv: [this.oCSV,
                [Validators.required,
                Validators.pattern('(?=.*[0-9]).{3,3}')]],
                nameCC2: [this.oNameCC2, Validators.required],
                ccNum2: [this.oCCnum2,
                [Validators.required,
                Validators.pattern('(?=.*[0-9]).{16,16}')]],
                expire2: [this.oExpire3,
                [Validators.required,
                Validators.pattern('(?=.*[0-9]).{4,4}')]],
                csv2: [this.oCSV2,
                [Validators.required,
                Validators.pattern('(?=.*[0-9]).{3,3}')]],
                nameCC3: [this.oNameCC3, Validators.required],
                ccNum3: [this.oCCnum3,
                [Validators.required,
                Validators.pattern('(?=.*[0-9]).{16,16}')]],
                expire3: [this.oExpire3,
                [Validators.required,
                Validators.pattern('(?=.*[0-9]).{4,4}')]],
                csv3: [this.oCSV3,
                [Validators.required,
                Validators.pattern('(?=.*[0-9]).{3,3}')]],
                address: [this.oAddress, Validators.required],
                city: [this.oCity, Validators.required],
                state: [this.oState, Validators.required],
                zip: [this.oZip,
                [Validators.required,
                Validators.pattern('(?=.*[0-9]).{5,5}')]],
                address2: [this.oAddress2, Validators.required],
                city2: [this.oCity2, Validators.required],
                state2: [this.oState2, Validators.required],
                zip2: [this.oZip2, Validators.required],
                address3: [this.oAddress3, Validators.required],
                city3: [this.oCity3, Validators.required],
                state3: [this.oState3, Validators.required],
                zip3: [this.oZip3, Validators.required],
            });
        })();

    }

    // convenience getter for easy access to form fields
    get f() { return this.profileForm.controls; }

    username = '';

    //save changes button clicked
    onSubmit() {
        var $taken: Observable<any>;
        var $change: Observable<any>;
        this.submitted = true;

        /* BREAKS CODE
        // stop here if form is invalid
        if (this.profileForm.invalid) {
            return;
        }
        */

        var usernameS: string = this.profileForm.get('username').value;
        var emailS: string = this.profileForm.get('email').value;
        var firstNameS: string = this.profileForm.get('firstName').value;
        var lastNameS: string = this.profileForm.get('lastName').value;
        var nicknameS: string = this.profileForm.get('nickname').value;

        var nameCCS: string = this.profileForm.get('nameCC').value;
        var ccNumS: string = this.profileForm.get('ccNum').value;
        var expireS: string = this.profileForm.get('expire').value;
        var CSVS: string = this.profileForm.get('csv').value;
        var nameCCS2: string = this.profileForm.get('nameCC2').value;
        var ccNumS2: string = this.profileForm.get('ccNum2').value;
        var expireS2: string = this.profileForm.get('expire2').value;
        var CSVS2: string = this.profileForm.get('csv2').value;
        var nameCCS3: string = this.profileForm.get('nameCC3').value;
        var ccNumS3: string = this.profileForm.get('ccNum3').value;
        var expireS3: string = this.profileForm.get('expire3').value;
        var CSVS3: string = this.profileForm.get('csv3').value;

        var addressS: string = this.profileForm.get('address').value;
        var cityS: string = this.profileForm.get('city').value;
        var stateS: string = this.profileForm.get('state').value;
        var zipS: string = this.profileForm.get('zip').value;
        var addressS2: string = this.profileForm.get('address2').value;
        var cityS2: string = this.profileForm.get('city2').value;
        var stateS2: string = this.profileForm.get('state2').value;
        var zipS2: string = this.profileForm.get('zip2').value;
        var addressS3: string = this.profileForm.get('address3').value;
        var cityS3: string = this.profileForm.get('city3').value;
        var stateS3: string = this.profileForm.get('state3').value;
        var zipS3: string = this.profileForm.get('zip3').value;

        //checks if username is taken BUT itself
        $taken = this.UserService.uniqueUsernameProf(this.id, usernameS);

        //subscribes string value into this.username
        $taken.subscribe(is_Taken => {
            this.username = is_Taken[0].is_taken;
        });

        /*
        visa prefix "4"
        mastercard prefix "51, 52, 53, 54, 55"
        discover prefix "6011"
        american express prefix "34, 37"
        */

        var ccPrefix = +(ccNumS.substring(0, 4)); //0000
        var twoDig = Math.floor(ccPrefix / 100); //00
        var firstDig = Math.floor(ccPrefix / 1000); //0

        var today = new Date();
        var mm = +(String(today.getMonth() + 1).padStart(2, '0')); //January is 0!
        var yyyy = +(String(today.getFullYear()).substring(2, 4));

        console.log(ccPrefix, firstDig, twoDig);

        if (firstDig == 4 || twoDig == 34 || twoDig == 37 || (twoDig < 56 && twoDig > 50) || ccPrefix == 6011) {
            var userMM = +(expireS.substring(0, 2));
            var userYY = +(expireS.substring(2, 4));

            this.isHiddenInvalidCC = true;

            if (userMM < 12) {
                this.isHiddenInvalidMM = true;
                if (userYY < yyyy)
                    this.isHiddenExpiredCC = false;
                else if (userYY == yyyy) {
                    this.isHiddenExpiredCC = true;
                    if (userMM < mm)
                        this.isHiddenExpiredCC = false;
                }
                else {
                    console.log('valid date');
                    this.isHiddenExpiredCC = true;
                    //stored procedure that stores new card goes through
                }
            }
            else
                this.isHiddenInvalidMM = false;
        }
        else
            this.isHiddenInvalidCC = false;

        if (!this.isHiddenCCtext) { //second card is activated
            var ccPrefix2 = +(ccNumS2.substring(0, 4)); //0000
            var twoDig2 = ccPrefix2 / 100; //00
            var firstDig2 = Math.floor(ccPrefix2 / 1000); //0

            console.log(ccPrefix2, firstDig2, twoDig2);

            if (firstDig2 == 4 || twoDig2 == 34 || twoDig2 == 37 || (twoDig2 < 56 && twoDig2 > 50) || ccPrefix2 == 6011) {
                var userMM2 = +(expireS2.substring(0, 2));
                var userYY2 = +(expireS2.substring(2, 4));

                this.isHiddenInvalidCC2 = true;

                if (userMM2 < 12) {
                    this.isHiddenInvalidMM2 = true;
                    if (userYY2 < yyyy)
                        this.isHiddenExpiredCC2 = false;
                    else if (userYY2 == yyyy) {
                        this.isHiddenExpiredCC2 = true;
                        if (userMM2 < mm)
                            this.isHiddenExpiredCC2 = false;
                    }
                    else {
                        console.log('valid date');
                        this.isHiddenExpiredCC2 = true;
                        //stored procedure that stores new card goes through
                    }
                }
                else
                    this.isHiddenInvalidMM2 = false;
            }
            else
                this.isHiddenInvalidCC2 = false;
        }

        if (!this.isHiddenCCtext2) { //third card is activated
            var ccPrefix3 = +(ccNumS3.substring(0, 4)); //0000
            var twoDig3 = ccPrefix3 / 100; //00
            var firstDig3 = Math.floor(ccPrefix3 / 1000); //0

            this.isHiddenInvalidCC3 = true;

            console.log(ccPrefix3, firstDig3, twoDig3);

            if (firstDig3 == 4 || twoDig3 == 34 || twoDig3 == 37 || (twoDig3 < 56 && twoDig3 > 50) || ccPrefix3 == 6011) {
                console.log('valid card');
                var userMM3 = +(expireS3.substring(0, 2));
                var userYY3 = +(expireS3.substring(2, 4));

                if (userMM3 < 12) {
                    this.isHiddenInvalidMM3 = false;
                    if (userYY3 < yyyy)
                        this.isHiddenExpiredCC3 = false;
                    else if (userYY3 == yyyy) {
                        this.isHiddenExpiredCC3 = true;
                        if (userMM3 < mm)
                            this.isHiddenExpiredCC3 = false;
                    }
                    else {
                        console.log('valid date');
                        this.isHiddenExpiredCC3 = true;
                        //stored procedure that stores new card goes through
                    }
                }
                else
                    this.isHiddenInvalidMM3 = false;
            }
            else
                this.isHiddenInvalidCC3 = false;
        }

        //validates username
        (async () => {
            await this.delay(200);

            //if username is taken, show error
            if (this.username == 'true') {
                this.isHiddenUname = false;
            }
            //username not taken; update users info. refreshes page once done
            else {
                this.isHiddenUname = true;

                $change = this.UserService.changeUser(this.id, usernameS, emailS, firstNameS, lastNameS, nicknameS);

                $change.subscribe();

                await this.delay(1000);
            }

        })();

    }

    logout() {
        this.UserService.changeUserId(0);
        this.router.navigate(['/user/login']);
    }

    //defines delays in ts
    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
