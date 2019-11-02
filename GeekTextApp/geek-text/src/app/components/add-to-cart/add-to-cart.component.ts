import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  @Input() book;
  userId: number = 16
  dataSource = null;
  
  constructor(private shoppingCartService: ShoppingCartDataService) { }

  
  addToCart(book) {
    window.alert(book.Name + ' has been added to the cart!');
    this.shoppingCartService.addBookToCart(this.userId, book.Id)
    .subscribe(
      data => {
        this.dataSource = data;
      });
}

  ngOnInit() {
  }

}
