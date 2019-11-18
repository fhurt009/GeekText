import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BookBrowsingService } from '../../services/book-browsing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

    formControl: FormControl = new FormControl();

    books: any = [];                    // list of all books in the store
    filteredBooks$: Observable<any>;    // books filtered by the user's search

    search: string = '';                // the current book name the user is searching for

    constructor(private router: Router, private bookBrowsingService: BookBrowsingService) { }

    ngOnInit() {
        this.bookBrowsingService.getAllBookNames().subscribe(books => this.books = books);
        this.filteredBooks$ = this.formControl.valueChanges.pipe(
            debounceTime(100),
            distinctUntilChanged(),
            map(value => this.filterBooks(value)));
    }

    optionSelected(event): void {
        var bookId: number = event.option.value;

        // book Id of 0 means there were no results found
        if (bookId !== 0) {
            this.router.navigate(['/browse/rating', bookId]);
        }
    }

    // display nothing when an item from the autocomplete list is selected
    clearBookName(book: any): string {
        return null;
    }

    filterBooks(userInput: string) {
        // make sure search value is of correct type
        if (typeof userInput !== 'string') {
            return [];
        }

        this.search = userInput.trim();

        // if the user inputs only whitespace, do not return any results
        if (this.search.length === 0) {
            return [];
        }

        // get an array of the individual words from the user input
        var searchTerms: string[] = this.search.toLowerCase().split(' ');

        // get only the books where the book title contains every word from the user input
        return this.books.filter(book => searchTerms.every(term => book.Name.toLowerCase().includes(term)));
    }
}
