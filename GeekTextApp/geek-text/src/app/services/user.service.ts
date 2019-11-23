import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private userId = new BehaviorSubject(0);
    currentUser = this.userId.asObservable();

    baseUrl: string = 'https://localhost:44323/api/';

    constructor(private http: HttpClient) { }

    /*
    How to use global variable Id:
    - import { UserService } from '../../services/user.service';
    - userId: number;
    - (in constructor) private UserService: UserService
    - (in ngOnInit) this.UserService.currentUser.subscribe(userId => this.userId = userId);
    DONE! userId holds the user's Id.
    The only time userId will ever be changed is during login and logout (in profile page).
    NOTICE: Manually reloading the page will make you lost the global variable.
    */

    changeUserId(id: number) {
        this.userId.next(id)
    }

    userLogin(username: string, password: string) {
        return this.http.get(this.baseUrl + 'user/login?username=' + username + '&password=' + password);
    }

    uniqueUsername(username: string) {
        return this.http.get(this.baseUrl + 'user/uniqueUsername?username=' + username);
    }

    uniqueUsernameProf(id: number, username: string) {
        return this.http.get(this.baseUrl + 'user/uniqueUsernameProf?id=' + id + '&username=' + username);
    }

    getData(id: number) {
        return this.http.get(this.baseUrl + 'user/getUsersData?id=' + id);
    }

    changeUser(id: number, username: string, email: string, firstname: string, lastname: string, nickname: string) {
        return this.http.put(this.baseUrl + 'user/changeUsersData?id=' + id + '&username=' + username + '&email=' + email + '&firstname=' + firstname + '&lastname=' + lastname + '&nickname=' + nickname, null);
    }

    pwMatch(id: number, password: string) {
        return this.http.get(this.baseUrl + 'user/pwMatch?id=' + id + '&password=' + password);
    }

    changepw(id: number, password: string) {
        return this.http.put(this.baseUrl + 'user/changepw?id=' + id + '&password=' + password, null);
    }

    register(username: string, password: string, email: string, firstname: string, lastname: string) {
        const data = { 'username': username, 'password': password, 'email': email, 'firstname': firstname, 'lastname': lastname };
        const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

        return this.http.post(this.baseUrl + 'user/register', data, config);
    }

    createCredit(id: number, cardnum: string, expiredate: string, cardname: string, csv: string) {
        const data = { 'id': id, 'cardnum': cardnum, 'expiredate': expiredate, 'cardname': cardname, 'csv': csv };
        const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

        return this.http.post(this.baseUrl + 'user/createCC', data, config);
    }

    getCard(id: number) {
        return this.http.get(this.baseUrl + 'user/getCC?id=' + id);
    }

    editCard(id: number, cardnum: string, expiredate: string, cardname: string, csv: string) {
        return this.http.put(this.baseUrl + 'user/editCC?id=' + id + '&cardnum=' + cardnum + '&expiredate=' + expiredate + '&cardname=' + cardname + '&csv=' + csv, null);
    }

}
