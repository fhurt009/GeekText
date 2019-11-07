import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'app-browse-list-item',
    templateUrl: './browse-list-item.component.html',
    styleUrls: ['./browse-list-item.component.scss']
})
export class BrowseListItemComponent implements OnInit {

    @Input() book;

    constructor() { }

    ngOnInit() {
    }

    // get string representation of book rating
    getStars(rating: number) {
        var stars = "";

        for (let i = 0; i < rating; i++) {
            stars = stars + "&#9733;";
        }

        for (let i = rating; i < 5; i++) {
            stars = stars + "&#9734;";
        }

        console.log(stars);
        return stars;
    }
}
