import { Component, OnInit} from '@angular/core';
import { ShoppingCartDataService } from '../../services/shopping-cart-data.service';
import { MatSelectChange, MatOption } from '@angular/material';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartDataSource = null;
  savedForLaterDataSource = null;
  displayedColumns: string[] = ['CoverUrl', 'Name', 'Author', 'SaveForLater', 'Price', 'Quantity', 'Delete' ]
  userId: number = 16;
  count: number;
  
  constructor(private shoppingCartService: ShoppingCartDataService) {  }

  ngOnInit() {
    this.shoppingCartService.getBooks(this.userId)
    .subscribe(
      data => {
        this.cartDataSource = data;
      }
    );
    this.shoppingCartService.getSavedForLaterBooks(this.userId)
    .subscribe(
      data => {
        this.savedForLaterDataSource = data;
      }
    );
  }

  getTotalCost() {
    if(this.cartDataSource){
      return this.cartDataSource.map(t => t.RetailPrice * t.Quantity).reduce((acc, value) => acc + value, 0);
    }
  }

  saveForLater(book)
  {
    if(book.IsSavedForLater){
      this.shoppingCartService.saveForLater(this.userId, book.BookId, false)
      .subscribe(data => {
        console.log("Success: " + book.Name + " was added to the cart!");
        this.shoppingCartService.getBooks(this.userId)
        .subscribe(
          data => {
            this.cartDataSource = data;
          }
        );
        this.shoppingCartService.getSavedForLaterBooks(this.userId)
        .subscribe(
          data => {
            this.savedForLaterDataSource = data;
          }
        );
      });
    }else{
      this.shoppingCartService.saveForLater(this.userId, book.BookId, true)
      .subscribe(data => {
        console.log("Success: " + book.Name + " was saved for later!");
        this.shoppingCartService.getBooks(this.userId)
        .subscribe(
          data => {
            this.cartDataSource = data;
          }
        );
        this.shoppingCartService.getSavedForLaterBooks(this.userId)
        .subscribe(
          data => {
            this.savedForLaterDataSource = data;
          }
        );
      });
    }
  }

  deleteBookFromCart(book) {
    this.shoppingCartService.deleteBookFromCart(this.userId, book.BookId)
    .subscribe(
      data => {
      console.log("Success: " + book.Name + " was removed from cart!");
      this.shoppingCartService.getBooks(this.userId)
      .subscribe(
        data => {
          this.cartDataSource = data;
        }
      );
      this.shoppingCartService.getSavedForLaterBooks(this.userId)
      .subscribe(
        data => {
          this.savedForLaterDataSource = data;
      }
    );
    });
  }

  checkoutcart() {
    this.shoppingCartService.checkout(this.userId)
    .subscribe(
      data => {
      console.log("The shopping cart was checked out!");
      this.shoppingCartService.getBooks(this.userId)
      .subscribe(
        data => {
          this.cartDataSource = data;
        }
      );
      this.shoppingCartService.getSavedForLaterBooks(this.userId)
      .subscribe(
        data => {
          this.savedForLaterDataSource = data;
      }
    );
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

  updateBookQuantity(book, quantity:number) {
    this.shoppingCartService.updateBookQuantity(this.userId, book.BookId, this.count)
    .subscribe(
      data => {
      console.log("Success: " + book.Name + " was updated to quantity of " + this.count + " in the cart!");
    });
  }

}