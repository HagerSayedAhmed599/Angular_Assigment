import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  image:string="assets/user.jpg"
  UsersList:any=[];
 constructor(private userService:UsersService){}
 ngOnInit(): void {
  this.userService.GetAllUsers().subscribe(
    data=>{
     this.UsersList=data;
    }
   );
 }

}
