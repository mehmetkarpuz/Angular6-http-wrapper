import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { UserModel } from './models/baseresponsemodel';
import { HttpWrapperService } from './httpwrapper/httpwrapper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: [UserService, HttpWrapperService]
})
export class AppComponent {
  UserList: UserModel[] = [];
  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(resp => {
      this.UserList = resp;
    }, err => {
      console.log(err);
      //Can't get users from server
    });
  }
}
