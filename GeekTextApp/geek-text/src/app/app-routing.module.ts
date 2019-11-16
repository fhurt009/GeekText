import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './book-browsing/categories/categories.component';
import { BrowseListComponent } from './book-browsing/browse-list/browse-list.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ChangepwComponent } from './user/changepw/changepw.component';


const routes: Routes = [
    { path: '', component: CategoriesComponent },
    { path: 'browse/genre/:genre', component: BrowseListComponent },
    { path: 'browse/rating/:rating', component: BrowseListComponent },
    { path: 'user', component: UserComponent, redirectTo: '' },
    { path: 'user/registration', component: RegistrationComponent },
    { path: 'user/login', component: LoginComponent },
    { path: 'user/profile', component: ProfileComponent },
    { path: 'user/changepw', component: ChangepwComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
