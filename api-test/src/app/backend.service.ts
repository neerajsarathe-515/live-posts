import { Injectable } from "@angular/core";
import { PostService } from "./post.service";

// @Injectable{{providedId : 'root'}}

export class BackEndService{
    constructor(private postService: PostService){}
}