import { Component } from '@angular/core';
import { Login } from '../shared/Classes';
import { LoginService } from '../Services/login.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component {
  constructor(private loginService:LoginService ,private fb:FormBuilder){}
  registerForm=this.fb.group({
    userName:['',[Validators.required]],
    password:['',[Validators.required]],
   }
   );
   get getUserName(){
    return this.registerForm.get('userName');
   }
   get getPassword(){
    return this.registerForm.get('password');
   }
  user=new Login("","");
  user1:any;

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
