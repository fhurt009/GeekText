import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WishListDataService } from '../services/wish-list-data.service';
import { Wishlist } from '../models/wishlist.model';
import { MatSelectChange, MatOption } from '@angular/material';

@Component({
  selector: 'app-add-to-wishlist',
  templateUrl: './add-to-wishlist.component.html',
  styleUrls: ['./add-to-wishlist.component.scss']
})
export class AddToWishlistComponent implements OnInit {

    @Input() book;
    wishlists: Wishlist = null;
    userId: number = 2;
    wishlistName: string;

    constructor(private formBuilder: FormBuilder, private router: Router, private wishlistDataService: WishListDataService) { }

    ngOnInit()
    {
        this.getWishlists(2)
    }

    selected(event: MatSelectChange, book)
    {
        console.log("Inside addToWishlist: " + book)
        const selectedData = {
            text: (event.source.selected as MatOption).viewValue,
            value: event.source.value
        }
        this.wishlistName = selectedData.text;
        console.log("Inside selected")
        //this.updateBookQuantity(book, this.count)
        // this.name = origin
        // this.nameDestination = destination
        // this.userId = userId
        // book.Id = book id
        this.wishlistDataService.addBookToWishlist(this.userId, book, this.wishlistName)
            .subscribe(
                data => {
                    alert(data)
                    //this.getBooks(this.userId, this.name);
                });
    }

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async getWishlists(userId: number) {
        this.wishlistDataService.getWishlists(userId)
            .subscribe(
                data => {
                    this.wishlists = data;
                }
            );
        await this.sleep(1000)
    }

}
