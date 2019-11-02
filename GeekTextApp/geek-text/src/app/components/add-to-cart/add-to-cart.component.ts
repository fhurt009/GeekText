import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  @Input() book;
  
  constructor(private shoppingCartService: ShoppingCartDataService) { }

  
  addToCart(item) {
    window.alert(item.Name + ' has been added to the cart!');
    this.shoppingCartService.addToCart(item);
}

  ngOnInit() {
  }

}
