import { Injectable } from '@angular/core';
import { Login, Register } from '../shared/Classes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
url1:string="http://localhost:3200/register";
  constructor(private http:HttpClient) { }

  onEnroll(user:Login){
   return this.http.post(this.url1,user);
  }
}
