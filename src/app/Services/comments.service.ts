import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icomments } from '../shared/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  postid!:any
  _url:string="https://jsonplaceholder.typicode.com/posts/";
  errorMessage: any;
  constructor(private http:HttpClient) { }
  
  GetAllComments(postid:any):Observable<Icomments[]>
  {
    this.postid=postid
    this._url=this._url+this.postid+"/comments";
    console.log(this._url)
    
    console.log(this.http.get<Icomments[]>(this._url))
    return this.http.get<Icomments[]>(this._url)

  }
}
