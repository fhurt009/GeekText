import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './book-browsing/categories/categories.component';
import { BrowseListComponent } from './book-browsing/browse-list/browse-list.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ChangepwComponent } from './user/changepw/changepw.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { WishListsSectionComponent } from './components/wish-lists-section/wish-lists-section.component';


const routes: Routes = [
    { path: '', component: CategoriesComponent },
    { path: 'browse/topsellers', component: BrowseListComponent },
    { path: 'browse/genre/:genre', component: BrowseListComponent },
    { path: 'browse/rating/:rating', component: BrowseListComponent },
    { path: 'user', component: UserComponent, redirectTo: '' },
    { path: 'user/registration', component: RegistrationComponent },
    { path: 'user/login', component: LoginComponent },
    { path: 'user/profile', component: ProfileComponent },
    { path: 'user/changepw', component: ChangepwComponent },
    { path: 'cart', component: ShoppingCartComponent },
    { path: 'wishlist', component: WishListComponent },
    { path: 'wishlistSection', component: WishListsSectionComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
