import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
 postId:any;
constructor(private activateRoute:ActivatedRoute){}
 ngOnInit(): void {
   this.postId=this.activateRoute.snapshot.paramMap.get("id");
 }
}
