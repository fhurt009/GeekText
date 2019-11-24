import { Component, OnInit ,Input} from '@angular/core';
import { BookDetailService } from '../services/book-detail.service';
import { Book } from '../models/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

    constructor(private route: ActivatedRoute, private _location: Location, private BookDetailService: BookDetailService) { }

    showDescription: boolean = false;

    
    book: any;
    pageTitle: string = "Book Detail For";
    imageWidth: number = 50;
    imageMargin: number = 2;
    errorMessage: string;


     bookId: number;

    books: Book[];

    bookAuthorId: number;
    
    
    starRating: number = 4.3;
    

    toggleImage(): void {
        this.showDescription = !this.showDescription;
    }


    ngOnInit() {

        const param = this.route.snapshot.paramMap.get('Id');
        const id =+ param;
        this.bookId = id;

        this.BookDetailService.getBookDetail(this.bookId).subscribe(book => this.book = book);

        //this.BookDetailService.getBookDetail(this.bookId).subscribe(book => this.bookAuthorId = this.book.Id);

        console.log('In OnInit');
    }

    onBack(): void {
        this._location.back();
    }

}
