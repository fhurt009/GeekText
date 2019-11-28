import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';
import { UserService } from 'src/app/services/user.service';
import { NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart-wishlist',
  templateUrl: './add-to-cart-wishlist.component.html',
  styleUrls: ['./add-to-cart-wishlist.component.scss']
})
export class AddToCartWishlistComponent implements OnInit {

    @Input() book;
    userId: number;
    dataSource = null;

    constructor(private shoppingCartService: ShoppingCartDataService, private userService: UserService, private router: Router) { }


    addToCart(book) {

        //this.userId = 2

        if (this.userId == 0) {
            window.alert('Redirecting to login/register page to start shopping!');
            this.router.navigate(['/user/login']);
        } else {
            window.alert(book.Name + ' has been added to the cart!');
            this.shoppingCartService.addBookToCart(this.userId, book.BookId)
                .subscribe(
                    data => {
                        this.dataSource = data;
                    }
                );
        }

    }

    ngOnInit() {
        this.userService.currentUser.subscribe(userId => this.userId = userId);
    }

}
