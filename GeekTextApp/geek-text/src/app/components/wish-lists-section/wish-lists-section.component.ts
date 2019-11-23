import { Component, OnInit } from '@angular/core';
import { WishListDataService } from '../../services/wish-list-data.service';

@Component({
  selector: 'app-wish-lists-section',
  templateUrl: './wish-lists-section.component.html',
  styleUrls: ['./wish-lists-section.component.scss']
})
export class WishListsSectionComponent implements OnInit {
    wishlists = null;

    constructor(private wishlistDataService: WishListDataService) { }

    ngOnInit()
    {
        this.getWishlists(2);
    }

    getWishlists(userId: number)
    {
        this.wishlistDataService.getWishlists(userId)
            .subscribe(
                data => {
                    this.wishlists = data;
                }
        );
    }

}
