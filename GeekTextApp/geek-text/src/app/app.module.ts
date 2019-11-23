import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { BrowseListItemComponent } from './book-browsing/browse-list-item/browse-list-item.component';
import { BrowseListComponent } from './book-browsing/browse-list/browse-list.component';
import { CategoriesComponent } from './book-browsing/categories/categories.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookAuthorComponent } from './book-author/book-author.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ShoppingCartComponent,
        BrowseListItemComponent,
        BrowseListComponent,
        CategoriesComponent,
        AddToCartComponent,
        BooksComponent,
        BookDetailsComponent,
        BookAuthorComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: '', component: AppComponent },
            { path: 'cart', component: ShoppingCartComponent },
            { path: 'book-detail/:Id', component: BookDetailsComponent },
            { path: 'Author/:id', component: BookAuthorComponent}
            
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
