import { Component } from '@angular/core';
import { RegisterService } from '../Services/register.service';
import { Register } from '../shared/Classes';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidation } from '../validtion/confirmPassword';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss']
})
export class Register2Component {
  Applications:any=["Face book","Twitter","Google"];
  user=new Register("","","","","");
  constructor(private registerService:RegisterService, private fb:FormBuilder){}
  submitData(){
 /*  this.registerService.onEnroll(this.user).subscribe({
    next:data=>console.log(data)
  }); */
  this.registerService.onEnroll(this.user).subscribe({
    next:data=>console.log(data),
    error:error=>console.log(error)
  });
  
  localStorage.setItem(this.user.userName,JSON.stringify(this.user));
  }
  registerForm=this.fb.group({
    userName:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
    application:['',[Validators.required]]
   },{validator:[confirmPasswordValidation]}
   );
   get getUserName(){
    return this.registerForm.get('userName');
   }
   get getEmail(){
    return this.registerForm.get('email');
   }
   get getPassword(){
    return this.registerForm.get('password');
   }
   get getConfirmPass(){
    return this.registerForm.get('confirmPassword');
   }
   get getApp(){
    return this.registerForm.get('application');
   }

}
