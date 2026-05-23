import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostType } from './entities/post.entity';

@Injectable()
export class PostsService {
  private readonly posts: PostType[] = [];

  create(createPostDto: CreatePostDto) {
    const maxId = this.posts.length > 0 
        ? Math.max(...this.posts.map((post) => +post.id)) : 0;

    const newPost: PostType = {
      ...createPostDto,
      id: String(maxId + 1)
    }
    this.posts.push(newPost);
    return newPost;
  }

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    const post = this.posts.find(post => +post.id === id);
    if(!post) throw new NotFoundException();
    return post;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    const index = this.posts.findIndex(post => +post.id === id);
    if(index === -1) throw new NotFoundException();
    this.posts[index] = {...this.posts[index], ...updatePostDto}
    return this.posts[index];
  }

  remove(id: number) {
    const index = this.posts.findIndex(post => +post.id === id);
    if(index === -1) throw new NotFoundException();
    this.posts.splice(index, 1);
  }
}
