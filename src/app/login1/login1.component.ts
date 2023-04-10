import { Component } from '@angular/core';
import { Login } from '../shared/Classes';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component {
user=new Login("","");
user1:any;
constructor(private loginService:LoginService){}
Login(){
  this.user1 = localStorage.getItem(this.user.userName);
    if(this.user1 != null) {
    this.notify(this.user.userName)
    } 
}
notify(name:string){
  alert("welcome "+name)

}
}
