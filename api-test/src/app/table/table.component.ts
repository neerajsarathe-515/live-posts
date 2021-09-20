import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  public allStocks: any;


  constructor(private postService: PostService, private http:HttpClient, private router: Router) { }

ngOnInit(): void {


   this.postService.getPosts()
   .pipe()
   .subscribe(data=>{
     console.log(data);

     this.allStocks = data;
   }

   )

}

changeStatus(){
  this.router.navigate(['/login']);
  localStorage.clear();

}

}
