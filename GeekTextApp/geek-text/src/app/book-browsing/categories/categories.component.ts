import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookBrowsingService } from '../../services/book-browsing.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    topSellers: Observable<any>;
    genres: any;

    constructor(private bookBrowsingService: BookBrowsingService) { }

    ngOnInit() {
        this.topSellers = this.bookBrowsingService.getBooksByTopSellers('name');
        this.bookBrowsingService.getAllGenres().subscribe(genres => this.genres = genres);
    }
}
