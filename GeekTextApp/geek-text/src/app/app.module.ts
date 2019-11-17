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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowseListItemComponent } from './book-browsing/browse-list-item/browse-list-item.component';
import { BrowseListComponent } from './book-browsing/browse-list/browse-list.component';
import { CategoriesComponent } from './book-browsing/categories/categories.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { BookSearchComponent } from './book-browsing/book-search/book-search.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ShoppingCartComponent,
        BrowseListItemComponent,
        BrowseListComponent,
        CategoriesComponent,
        AddToCartComponent,
        BookSearchComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', component: AppComponent },
            { path: 'cart', component: ShoppingCartComponent }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
