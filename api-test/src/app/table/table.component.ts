import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public allStocks: any;
  

  constructor(private postService: PostService, private http:HttpClient) { }

ngOnInit(): void {

   this.postService.getPosts()
   .pipe()
   .subscribe(data=>{
     this.allStocks = data;
   }

   )
    
}
}