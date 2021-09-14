import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post?: Post;
  @Input() index: number = 0;
  constructor(private postService: PostService, private router : Router) { }

  ngOnInit(): void {
    // console.log(this.post);
    // console.log(this.postService.listOfPosts[0]);
   
    
  }

  onDelete(){
    console.log("del called")
    this.postService.deletePost(this.index);
  }

  onEdit(){
    console.log("Edit called");
    this.router.navigate(["/post-edit", this.index]);
  }

  likePost(){
    this.postService.likePost(this.index);
  }
}
