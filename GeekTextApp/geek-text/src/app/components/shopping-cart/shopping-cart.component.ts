import { Component, OnInit} from '@angular/core';
import { Book } from '../../models/book.model';
import { ShoppingCartDataService } from '../../services/shopping-cart-data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  books;
  dataSource = this.books;
  displayedColumns: string[] = [ 'Name', 'Author', 'Price', 'SaveForLater']
  
  constructor(private shoppingCartService: ShoppingCartDataService) {  }

  ngOnInit() {
    this.books = this.shoppingCartService.getBooks();
  }
}