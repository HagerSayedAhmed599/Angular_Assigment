import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iusers } from '../shared/Interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
url:string="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }
  GetAllUsers():Observable<Iusers[]>{
    return this.http.get<Iusers[]>(this.url);  
  };
}
