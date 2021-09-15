import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostService {
    itemList : Post[] = [
        new Post("stock","Zerodol SP",4000,"1625916217","1625916217","4c52933976f3944b9d09ce5d024e96d23af60f7452e461458a019df5c58835f2","Admin@serviceprovider.com"),
        new Post("stock","Zerodol SP",4000,"1625916217","1625916217","4c52933976f3944b9d09ce5d024e96d23af60f7452e461458a019df5c58835f2","Admin@serviceprovider.com"),
    ];
    

    getPosts(){

        return this.itemList;
    }
}