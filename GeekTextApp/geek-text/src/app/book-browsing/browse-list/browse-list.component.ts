import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookBrowsingService } from '../../services/book-browsing.service';

@Component({
    selector: 'app-browse-list',
    templateUrl: './browse-list.component.html',
    styleUrls: ['./browse-list.component.scss']
})
export class BrowseListComponent implements OnInit {

    sortBy: string;
    books: any;

    constructor(private route: ActivatedRoute, private bookBrowsingService: BookBrowsingService) { }

    ngOnInit() {
        this.sortBy = 'name';
        this.sortBooks();
    }

    sortBooks() {
        console.log('hi');
        this.route.paramMap.subscribe(params => {
            var path: string = this.route.snapshot.url[1].path;

            if (path === 'topsellers') {
                this.bookBrowsingService.getBooksByTopSellers(this.sortBy).subscribe(books => this.books = books);
            } else if (path === 'genre') {
                var genre: string = params.get('genre');
                this.bookBrowsingService.getBooksByGenre(genre, this.sortBy).subscribe(books => this.books = books);
            } else if (path === 'rating') {
                var rating: number = parseInt(params.get('rating'));
                this.bookBrowsingService.getBooksByRating(rating, this.sortBy).subscribe(books => this.books = books);
            }
        });
    }
}
