import { Component, OnInit} from '@angular/core';
import { Book } from '../../models/book.model';
import { ShoppingCartDataService } from '../../services/shopping-cart-data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  dataSource = null;
  displayedColumns: string[] = [ 'Name', 'Author', 'SaveForLater', 'Price', 'Quantity', 'Delete']
  userId: number = 16;
  
  constructor(private shoppingCartService: ShoppingCartDataService) {  }

  ngOnInit() {
    this.shoppingCartService.getBooks(this.userId)
    .subscribe(
      data => {
        this.dataSource = data;
      }
    );
  }

  getTotalCost() {
    if(this.dataSource){
      return this.dataSource.map(t => t.RetailPrice * t.Quantity).reduce((acc, value) => acc + value, 0);
    }
  }

  deleteBookFromCart(book) {
    this.shoppingCartService.deleteBookFromCart(this.userId, book.BookId)
    .subscribe((data)=>{
      console.log("Success: " + book.Name + " was removed from cart!");
      this.shoppingCartService.getBooks(this.userId)
      .subscribe(
        data => {
          this.dataSource = data;
        }
      )
    });
  }
}