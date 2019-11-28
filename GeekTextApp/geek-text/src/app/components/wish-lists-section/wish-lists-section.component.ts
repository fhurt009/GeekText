import { Component, OnInit } from '@angular/core';
import { WishListDataService } from '../../services/wish-list-data.service';
import { Wishlist } from '../../models/wishlist.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-wish-lists-section',
  templateUrl: './wish-lists-section.component.html',
  styleUrls: ['./wish-lists-section.component.scss']
})
export class WishListsSectionComponent implements OnInit {
    wishlists: Wishlist = null;
    createForm: FormGroup;
    userId: number;

    constructor(private formBuilder: FormBuilder, private router: Router,
        private wishlistDataService: WishListDataService, private userService: UserService) { }

    ngOnInit()
    {
        //this.userId = 2
        console.log('Inside wish-lists-section')
        this.userService.currentUser.subscribe(userId => this.userId = userId);
        if (this.userId == 0) {
            window.alert('Redirecting to login/register page to start shopping!');
            this.router.navigate(['/user/login']);
        } else {
        this.createForm = this.formBuilder.group({
            name: ['', Validators.required]
        });

            this.getWishlists(this.userId);
        }
    }

    sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

    // Set Dynamic Classes
    setClasses() {
        let classes = {
            todo: true,
            'is-complete': false
        }

        return classes;
    }

    async getWishlists(userId: number)
    {
        this.wishlistDataService.getWishlists(userId)
            .subscribe(
                data => {
                    this.wishlists = data;
                }
        );
        await this.sleep(1000)
    }

    onToggle(name) {
        console.log('In Toggle: ' + name)
        this.router.navigate(['/wishlist/' + name])
    }

    onDelete(wishlist) {
        console.log('delete' + wishlist.UserId + ' and ' + wishlist.Name);
        //window.location.reload();
        //this.router.navigate(['/wishlistSection/'])
        this.wishlistDataService.deleteUserWishlist(wishlist.UserId, wishlist.Name)
            .subscribe(
                data => {
                    alert(data);
                    //this.router.navigate(['/wishlistSection'])
                    //window.location.reload();
                    this.getWishlists(wishlist.UserId)
                });
    }

    create()
    {
        var name: string = this.createForm.get('name').value;
        console.log('In onEnter: ' + name)
        //this.result = nameS.match(" ^ [A - Za - z0 - 9] + $")
        //console.log('Result: ' + result)
        const returnValue = this.wishlistDataService.createWishList(this.userId, name)
            .subscribe(
                data => {
                    alert(data);
                    //this.router.navigate(['/wishlistSection'])
                    //window.location.reload();
                    this.getWishlists(this.userId)
                });

    }
}
