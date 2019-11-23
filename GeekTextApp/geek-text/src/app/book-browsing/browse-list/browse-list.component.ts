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

    path: string = '';  // current url path
    params: any;        // params for this route

    title: string = '';
    genres: any = [];

    books: any = [];
    booksLoaded: boolean = false;

    sortBy: string = 'name';  // bound to mat-select value

    // input variables for the mat-paginator
    pageSizeOptions: number[] = [10, 20];
    pageIndex: number = 0;
    pageSize: number = this.pageSizeOptions[0];

    // show books #startIndex - #endIndex
    startIndex: number = 0;
    endIndex: number = this.pageSize;


    constructor(private route: ActivatedRoute, private bookBrowsingService: BookBrowsingService) { }

    ngOnInit() {
        this.path = this.route.snapshot.url[1].path;
        this.route.paramMap.subscribe(params => {
            this.params = params;
            this.setTitle();

            var queryParams: any = this.route.snapshot.queryParamMap;
            if (queryParams.has('sortBy')) {
                this.sortBy = queryParams.get('sortBy');
                if (this.path !== 'topsellers' && this.sortBy === 'sold') {
                    this.sortBy = 'name';
                }
            }
            if (queryParams.has('pageSize')) {
                var pageSize = parseInt(queryParams.get('pageSize'));
                if (this.pageSizeOptions.includes(pageSize)) {
                    this.pageSize = pageSize;
                    this.setBookIndexes();
                }
            }

            this.sortBooks();
        });

        this.bookBrowsingService.getAllGenres().subscribe(genres => this.genres = genres);
    }

    pageChange(event: PageEvent): void {
        if (this.pageSize == event.pageSize) {  // do not scroll to top if user only changes # of items per page
            this.scrollToPageTop();
        }

        // update the page index and size so that all paginators get updated
        //this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;

        // recalculate the subset of books to show
        this.setBookIndexes();
    }

    setBookIndexes(): void {
        this.startIndex = this.pageIndex * this.pageSize;
        this.endIndex = this.startIndex + this.pageSize;
    }

    // when a category link is clicked, go to first page in the paginator, and scroll to top of the page
    reload(): void {
        this.pageIndex = 0;
        this.scrollToPageTop();
    }

    scrollToPageTop(): void {
        document.querySelector('#body').scrollIntoView();
    }

    setTitle(): void {
        if (this.path === 'topsellers') {
            this.title = "top sellers";
        } else if (this.path === 'genre') {
            var genre: string = this.params.get('genre');
            this.title = genre + " books";
        } else if (this.path === 'rating') {
            var rating: number = parseInt(this.params.get('rating'));
            if (rating === 5) {
                this.title = rating + " star ratings ";
            } else if (rating >= 1 && rating <= 4) {
                this.title = rating + " star ratings and higher";
            }
        }
    }

    sortBooks(): void {
        // sorting is done in backend, so books must be reloaded
        this.books = [];
        this.booksLoaded = false;

        var books$: Observable<any>;

        if (this.path === 'topsellers') {
            books$ = this.bookBrowsingService.getBooksByTopSellers(this.sortBy);
        } else if (this.path === 'genre') {
            var genre: string = this.params.get('genre');
            books$ = this.bookBrowsingService.getBooksByGenre(genre, this.sortBy);
        } else if (this.path === 'rating') {
            var rating: number = parseInt(this.params.get('rating'));
            books$ = this.bookBrowsingService.getBooksByRating(rating, this.sortBy);
        }

        books$.subscribe(books => {
            this.books = books;
            this.booksLoaded = true;
        });
    }
}
