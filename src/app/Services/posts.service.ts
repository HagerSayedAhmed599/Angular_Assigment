import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iposts } from '../shared/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }
  getAllPosts():Observable<Iposts[]>{
    return this.http.get<Iposts[]>(this.url);
  };
  posts:any=this.getAllPosts();
  GetProductById(postId:number){
    this.posts.array.forEach((((element :{
      id:Number;title:String;body:string;
    })=>{
      if(element.id==postId){
      return {id:element.id,title:element.title,body:element.body}
    }
    return null;
  })))
    
  }
}
