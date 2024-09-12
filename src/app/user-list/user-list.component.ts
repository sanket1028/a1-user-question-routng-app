import { Component } from '@angular/core';
import { User } from '../user';
import { user } from '../user-mock-data';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = user;
}
