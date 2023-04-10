import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../shared/Classes';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
url:string="";
  constructor(private http:HttpClient) { }
  onLogin(user:Login){
    return this.http.post(this.url,user);
  }
}
