import { Component } from '@angular/core';
import {UserModel} from '../models/UserModel';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  msg = 'Users';
  /**  users: UserModel[];
   *
   * Цей варіант діяв до того як ми його перенесли в User.service
 *  constructor(private http: HttpClient) {
 *   this.greeting();
 *    this.http.get<UserModel[]>('http://jsonplaceholder.typicode.com/users').subscribe(value => {
 *      console.log(value);
 *      this.users = value;
 *  });
 * }
   *
   * constructor(private userService: UserService) {
   * this.userService.getUsers().subscribe(value => this.users = value);
   * }
*/

  constructor() {

  }

}
