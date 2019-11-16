import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    baseUrl: string = 'https://localhost:44323/api/';

    constructor(private http: HttpClient) { }

    userLogin(username: string, password: string) {
        return this.http.get(this.baseUrl + 'user/login?username=' + username + '&password=' + password);
    }

    uniqueUsername(username: string) {
        return this.http.get(this.baseUrl + 'user/uniqueUsername?username=' + username);
    }

    pwMatch(id: number, password: string) {
        return this.http.get(this.baseUrl + 'user/pwMatch?id=' + id + '&password=' + password);
    }

    register(username: string, password: string, email: string, firstname: string, lastname: string) {
        const data = { 'username': username, 'password': password, 'email': email, 'firstname': firstname, 'lastname': lastname };
        const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

        return this.http.post(this.baseUrl + 'user/register', data, config);
    }

}
