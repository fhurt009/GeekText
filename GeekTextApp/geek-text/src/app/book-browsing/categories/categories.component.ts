import { Component, OnInit } from '@angular/core';

import { BookBrowsingService } from '../../services/book-browsing.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    genres: any;

    constructor(private bookBrowsingService: BookBrowsingService) { }

    ngOnInit() {
        this.bookBrowsingService.getAllGenres().subscribe(genres => this.genres = genres);
    }
}
