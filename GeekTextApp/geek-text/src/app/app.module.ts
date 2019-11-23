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
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { BookSearchComponent } from './book-browsing/book-search/book-search.component';
import { ChangepwComponent } from './user/changepw/changepw.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { WishListsSectionComponent } from './components/wish-lists-section/wish-lists-section.component';
import { WishlistButtonComponent } from './components/wishlist-button/wishlist-button.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ShoppingCartComponent,
        BrowseListItemComponent,
        BrowseListComponent,
        CategoriesComponent,
        UserComponent,
        LoginComponent,
        RegistrationComponent,
        ProfileComponent,
        AddToCartComponent,
        BookSearchComponent,
        ChangepwComponent,
        WishListComponent,
        WishListsSectionComponent,
        WishlistButtonComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', component: AppComponent },
            { path: 'shopping-cart', component: ShoppingCartComponent },
            { path: 'cart', component: ShoppingCartComponent },
            { path: 'wishlist', component: WishListComponent }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
