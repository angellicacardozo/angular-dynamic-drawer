import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../shared/classes/user.class';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<User[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
  }
}
