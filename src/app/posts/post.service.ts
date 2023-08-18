import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../shared/classes/user.class';
import { Post } from '../../shared/classes/post.class';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient.get<Post[]>(
      `https://jsonplaceholder.typicode.com/posts`
    );
  }

  getAuthor(userId: number) {
    return this.httpClient.get<User>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}
