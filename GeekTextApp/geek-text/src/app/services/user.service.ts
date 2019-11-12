import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    baseUrl: string = 'https://localhost:44323/api/';

    constructor(private http: HttpClient) { }

    userLogin(username: string, password: string) {
        return this.http.get(this.baseUrl + 'user?username=' + username + '&password=' + password);
    }
}
