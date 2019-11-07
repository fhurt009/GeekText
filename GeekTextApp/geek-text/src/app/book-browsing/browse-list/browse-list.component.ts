import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookBrowsingService } from '../../services/book-browsing.service';
import { PageEvent } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-browse-list',
    templateUrl: './browse-list.component.html',
    styleUrls: ['./browse-list.component.scss']
})
export class BrowseListComponent implements OnInit {

    title: string = "";
    genres: any = [];

    books: any = [];
    sortBy: string = 'name';  // bound to mat-select value
    booksLoaded: boolean = false;

    // input variables for the mat-paginator
    pageSizeOptions: number[] = [1, 3, 10, 20];
    pageIndex: number = 0;
    pageSize: number = this.pageSizeOptions[2];

    // show books #startIndex - #endIndex
    startIndex: number = 0;
    endIndex: number = this.pageSize;

    constructor(private route: ActivatedRoute, private bookBrowsingService: BookBrowsingService) { }

    ngOnInit() {
        this.bookBrowsingService.getAllGenres().subscribe(genres => this.genres = genres);
        this.sortBooks();
    }

    pageChange(event: PageEvent) {
        if (this.pageSize == event.pageSize) {  // do not scroll to top if user only changes # of items per page
            this.scrollToPageTop();
        }

        // update the page index and size so that all paginators get updated
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;

        // recalculate the subset of books to show
        this.startIndex = this.pageIndex * this.pageSize;
        this.endIndex = this.startIndex + this.pageSize;
    }

    // return an array of size equal to 'rating'
    getStars(rating: number) {
        return Array(rating).fill(0);
    }

    // when a category link is clicked, go to first page in the paginator, and scroll to top of the page
    reload() {
        this.pageIndex = 0;
        this.scrollToPageTop();
    }

    scrollToPageTop() {
        document.querySelector('#body').scrollIntoView();
    }

    sortBooks() {
        this.route.paramMap.subscribe(params => {
            this.booksLoaded = false;

            var path: string = this.route.snapshot.url[1].path;
            var $books: Observable<any>;

            if (path === 'topsellers') {
                this.title = "top sellers";
                $books = this.bookBrowsingService.getBooksByTopSellers(this.sortBy);
            } else if (path === 'genre') {
                var genre: string = params.get('genre');
                this.title = genre + " books";
                $books = this.bookBrowsingService.getBooksByGenre(genre, this.sortBy);
            } else if (path === 'rating') {
                var rating: number = parseInt(params.get('rating'));
                if (rating == 5) {
                    this.title = rating + " star ratings ";
                } else {
                    this.title = rating + " star ratings and higher";
                }
                $books = this.bookBrowsingService.getBooksByRating(rating, this.sortBy);
            }

            $books.subscribe(books => {
                this.books = books;
                this.booksLoaded = true;
            });
        });
    }
}
