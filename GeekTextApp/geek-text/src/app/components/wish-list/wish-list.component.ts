import { Component, OnInit, Input } from '@angular/core';
import { WishListDataService } from '../../services/wish-list-data.service';
import { MatSelectChange, MatOption } from '@angular/material';
import { Wishlist } from '../../models/wishlist.model';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
    wishlist: string ;
    wishlistDataSource;
    savedForLaterDataSource = null;
    displayedColumns: string[] = ['CoverUrl', 'Name', 'Author', 'Price', 'Quantity', 'Delete']
    userId: number = 2;
    count: number;

    constructor(private wishlistDataService: WishListDataService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.getBooks(this.userId, 'Wish_List_Roey_1');
    }

    getBooks(userId: number, wishlistName: string) {
        this.wishlistDataService.getBooks(userId, wishlistName)
            .subscribe(
                data => {
                    this.wishlistDataSource = data;
                }
            );
    }

    getTotalCost() {
        if (this.wishlistDataSource) {
            return this.wishlistDataSource.map(t => t.RetailPrice * t.Quantity).reduce((acc, value) => acc + value, 0);
        }
    }
    
    deleteBookFromWishList(book) {
        this.wishlistDataService.removeBookFromWishlist(this.userId, book.BookId, "Wish_List_Roey_1")
            .subscribe(
                data => {
                    console.log("Success: " + book.Name + " was removed from cart!");
                    this.getBooks(2, 'Wish_List_Roey_1');
                });
    }

    /** getTotalCost() {
        if (this.cartDataSource) {
            return this.cartDataSource.map(t => t.RetailPrice * t.Quantity).reduce((acc, value) => acc + value, 0);
        }
    }

    saveForLater(book) {
        if (book.IsSavedForLater) {
            this.shoppingCartService.saveForLater(this.userId, book.BookId, false)
                .subscribe(data => {
                    console.log("Success: " + book.Name + " was added to the cart!");
                    this.getShoppingCart();
                });
        } else {
            this.shoppingCartService.saveForLater(this.userId, book.BookId, true)
                .subscribe(data => {
                    console.log("Success: " + book.Name + " was saved for later!");
                    this.getShoppingCart();
                });
        }
    }

    deleteBookFromCart(book) {
        this.shoppingCartService.deleteBookFromCart(this.userId, book.BookId)
            .subscribe(
                data => {
                    console.log("Success: " + book.Name + " was removed from cart!");
                    this.getShoppingCart();
                });
    }

    checkoutcart() {
        this.shoppingCartService.checkout(this.userId)
            .subscribe(
                data => {
                    console.log("The shopping cart was checked out!");
                    this.getShoppingCart();
                });
    }

    selected(event: MatSelectChange, book) {
        const selectedData = {
            text: (event.source.selected as MatOption).viewValue,
            value: event.source.value
        }
        this.count = selectedData.value;
        this.updateBookQuantity(book, this.count)
    }

    updateBookQuantity(book, quantity: number) {
        this.shoppingCartService.updateBookQuantity(this.userId, book.BookId, this.count)
            .subscribe(
                data => {
                    console.log("Success: " + book.Name + " was updated to quantity of " + this.count + " in the cart!");
                    this.getShoppingCart();
                });
    }*/

}
