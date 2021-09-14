import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostService {
    listOfPosts: Post[] = [
        
    
        new Post("Nature", "Nature is a british scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.","https://thumbs-prod.si-cdn.com/P4Smi9MthEBXH7pdW8Y-bvwR6ts=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg","test@test.com",new Date(),3),
    
        new Post("Environment", "Environment is a british scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.","https://thumbs-prod.si-cdn.com/P4Smi9MthEBXH7pdW8Y-bvwR6ts=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg","test@test.com",new Date(),4),
        
        new Post("Trees", "Trees is a british scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.","https://thumbs-prod.si-cdn.com/P4Smi9MthEBXH7pdW8Y-bvwR6ts=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg","test@test.com",new Date(),2)
    
        
        
    ];

    //facility1
    getPosts(){
        return this.listOfPosts;
    }

    //facility2
    deletePost(index: number){
        this.listOfPosts.splice(index, 1);
    }

    //facility3
    addPost(post: Post){
        this.listOfPosts.push(post);
    }

    //facility4
    updatePost(index: number, post: Post){
        this.listOfPosts[index] = post;
    }

    //facility5
    getPost(index: number){
       return this.listOfPosts[index];

    }

    //facility6
    likePost(index: number){
        this.listOfPosts[index].numberOfLikes +=1;
    }
}

