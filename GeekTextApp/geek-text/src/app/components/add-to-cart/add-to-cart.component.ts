import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartDataService } from 'src/app/services/shopping-cart-data.service';
import { UserService } from 'src/app/services/user.service';
import { NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  @Input() book;
  userId: number;
  dataSource = null;
  
  constructor(private shoppingCartService: ShoppingCartDataService, private userService: UserService, private router: Router) { }

  
  addToCart(book) {
    if(this.userId == 0) {
      window.alert('Redirecting to login/register page to start shopping!');
      this.router.navigate(['/user/login']);
    }else {
      window.alert(book.Name + ' has been added to the cart!');
      this.shoppingCartService.addBookToCart(this.userId, book.Id)
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
