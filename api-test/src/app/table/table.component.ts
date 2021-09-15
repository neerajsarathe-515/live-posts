import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() post?: Post;
  itemList : Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    console.log(this.post);
    this.itemList = this.postService.getPosts();
  }

}
