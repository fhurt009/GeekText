import { Component, OnInit, Input } from '@angular/core';
import { Wishlist } from '../../models/wishlist.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist-button',
  templateUrl: './wishlist-button.component.html',
  styleUrls: ['./wishlist-button.component.scss']
})
export class WishlistButtonComponent implements OnInit {

    @Input() myWishlist: Wishlist;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    // Set Dynamic Classes
    setClasses() {
        let classes = {
            todo: true,
            'is-complete': false
        }

        return classes;
    }

    onToggle(wishlist) {
        console.log('In Toggle: ' + wishlist)
        this.router.navigate(['/wishlist'], wishlist)
    }

    onDelete(a) {
        console.log('delete');
    }

}
