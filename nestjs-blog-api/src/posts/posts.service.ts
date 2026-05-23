import { Injectable, NotFoundException } from '@nestjs/common';
import { PostType } from './post.interface';
import { NotFoundError } from 'rxjs';

@Injectable()
export class PostsService {
    private readonly posts: PostType[] = [];

    findAll(): PostType[]{
        return this.posts;
    }

    create(post: PostType){
        this.posts.push(post);
    }

    findById(id: string): PostType{
        const post = this.posts.find((post) => post.id === id);
        if(!post) throw new NotFoundException(`Post ${id} not found`);
        return post;
    }
}
