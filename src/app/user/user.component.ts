import {Component, EventEmitter, Input} from '@angular/core';
import {UserModel} from '../../models/UserModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: UserModel;

  constructor() {
  }


}
