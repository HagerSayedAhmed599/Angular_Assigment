import { Component } from '@angular/core';
import { Register } from '../shared/Classes';
import { RegisterService } from '../Services/register.service';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.scss']
})
export class Register1Component {
Applications:any=["Face book","Twitter","Google"];
user=new Register("","","","","");
constructor(private registerService:RegisterService){}
submitData(){
  this.registerService.onEnroll(this.user).subscribe({
    next:data=>console.log(data),
    error:error=>console.log(error)
  });
  
  localStorage.setItem(this.user.userName,JSON.stringify(this.user));
}
}
