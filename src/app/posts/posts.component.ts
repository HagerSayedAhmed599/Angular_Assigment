import { Component, OnInit } from '@angular/core';
import { PostsService } from '../Services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from '../Services/comments.service';
import { Iposts } from '../shared/Interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:any=[];
  constructor(private postService:PostsService,private router:Router,private activateRoute:ActivatedRoute,private commentService:CommentsService){}
ngOnInit(): void {
  this.postService.getAllPosts().subscribe(
    data=>{
    this.posts=data;
    }
  )
 
}
comments:any=[];
 onNavigate1(postId:any){
  this.router.navigate(["/posts",postId]);
} 
onNavigate(post:Iposts){
  
  this.router.navigate(["comments",post.id]);
}
}
