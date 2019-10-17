import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookBrowsingService } from '../../services/book-browsing.service';

@Component({
    selector: 'app-browse-list',
    templateUrl: './browse-list.component.html',
    styleUrls: ['./browse-list.component.scss']
})
export class BrowseListComponent implements OnInit {

    books;

    constructor(private route: ActivatedRoute, private bookBrowsingService: BookBrowsingService) { }

    ngOnInit() {
        this.sortBooks('name');
    }

    sortBooks(sortBy: string) {
        this.route.paramMap.subscribe(params => {
            var path: string = this.route.snapshot.url[1].path;

            if (path === 'topsellers') {
                this.bookBrowsingService.getBooksByTopSellers(sortBy).subscribe(books => this.books = books);
            } else if (path === 'genre') {
                var genre: string = params.get('genre');
                this.bookBrowsingService.getBooksByGenre(genre, sortBy).subscribe(books => this.books = books);
            } else if (path === 'rating') {
                var rating: number = parseInt(params.get('rating'));
                this.bookBrowsingService.getBooksByRating(rating, sortBy).subscribe(books => this.books = books);
            }
        });
    }
}
