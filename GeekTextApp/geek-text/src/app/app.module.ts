import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { BrowseListItemComponent } from './book-browsing/browse-list-item/browse-list-item.component';
import { BrowseListComponent } from './book-browsing/browse-list/browse-list.component';
import { CategoriesComponent } from './book-browsing/categories/categories.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';


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
        AddToCartComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: '', component: AppComponent },
            { path: 'shopping-cart', component: ShoppingCartComponent },
            { path: 'cart', component: ShoppingCartComponent }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
