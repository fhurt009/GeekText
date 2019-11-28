import { Component, OnInit, Input } from '@angular/core';
import { WishListDataService } from '../../services/wish-list-data.service';
import { MatSelectChange, MatOption } from '@angular/material';
import { Wishlist } from '../../models/wishlist.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
    name: string;
    wishlists: Wishlist = null;
    wishlistDataSource;
    savedForLaterDataSource = null;
    displayedColumns: string[] = ['CoverUrl', 'Name', 'Author', 'Price', 'Quantity', 'Delete', 'Add To Cart', 'Switch To'/*, 'Add To WishList'*/]
    userId: number;
    nameDestination: string;

    constructor(private wishlistDataService: WishListDataService,
        private route: ActivatedRoute, private router: Router, private userService: UserService) { }

    ngOnInit() {
        this.userId = 2
        this.userService.currentUser.subscribe(userId => this.userId = userId);

        if (this.userId == 0) {
            window.alert('Redirecting to login/register page to start shopping!');
            this.router.navigate(['/user/login']);
        } else
        {
            this.name = this.route.snapshot.paramMap.get('name');
            this.getBooks(this.userId, this.name);
            this.getWishlists(this.userId);
            console.log("Success")
        }
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
        this.wishlistDataService.removeBookFromWishlist(this.userId, book.BookId, this.name)
            .subscribe(
                data => {
                    alert(data)
                    //console.log("Success: " + book.Name + " was removed from wishlist!");
                    this.getBooks(this.userId, this.name);
                });
    }

    selected(event: MatSelectChange, book/*, nameDestination*/) {
        const selectedData = {
            text: (event.source.selected as MatOption).viewValue,
            value: event.source.value
        }
        this.nameDestination = selectedData.text;
        console.log("Inside selected")
        //this.updateBookQuantity(book, this.count)
        // this.name = origin
        // this.nameDestination = destination
        // this.userId = userId
        // book.Id = book id
        this.wishlistDataService.transferBook(this.userId, book.BookId, this.name, this.nameDestination)
            .subscribe(
                data => {
                    alert(data)
                    this.getBooks(this.userId, this.name);
                });
    }

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async getWishlists(userId: number) {
        this.wishlistDataService.getWishlists(userId)
            .subscribe(
                data => {
                    let index = Array(data)[0].indexOf((data.find(x => x.Name === this.name)), 0)
                    Array(data)[0].splice(index, 1)
                    this.wishlists = data;
                }
            );
        await this.sleep(1000)
    }

}
