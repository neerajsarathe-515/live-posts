import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, Input } from "@angular/core";
import { environment } from "src/environments/environment";
import { Post } from "./post.model";
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class PostService {

    @Input() post?: Post;
    

    constructor(private http:HttpClient ){}      
    getPosts(){
      const headers = new HttpHeaders({
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlZXBsb29wIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjI1OTEzMTg3fQ.l61CZ90trS-3D_aJkVZLDqrES80VTVN1AwPACBqrXhE'
      })

      const body = {
          "orgName": "hospitals",
          "userName": "appollo"
      };
  
      return this.http.post<any>(`${environment.apiUrl}/api/getAllStockDetails`, body,{headers}).pipe(map(allStocks =>{
        return (allStocks?.data?.Details?.data);
         
      }))
        
      }

        // return this.http.post('http://13.235.242.76:8000/api/getAllStockDetails', body,{headers});
        // return this.http.post(`${environment.apiUrl}/api/getAllStockDetails`, body,{headers})

        // return this.itemList;

    
}