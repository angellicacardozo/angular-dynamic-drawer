import { Component, OnInit } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { DrawerFacadeService } from '../../../shared/services/drawer.facade';
import { Post } from '../../../shared/classes/post.class';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { PostService } from '../post.service';
import { UserDetailComponent } from '../../../shared/components/user-detail/user-detail.component';
import { User } from '../../../shared/classes/user.class';
import { LoadingState } from '../../../shared/directives/if-loading.directive';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts$!: Observable<Post[]>;
  loadingState: LoadingState<User> = { type: 'loaded', data: null };

  constructor(
    private postService: PostService,
    private drawerFacadeService: DrawerFacadeService
  ) {}

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }

  trackByPosts(_index: number, post: Post) {
    return post.id;
  }

  dispatchOpenPostDetail(post: Post) {
    this.drawerFacadeService.open(PostDetailComponent, post);
  }

  dispatchOpenAuthorDetail(userId: number) {
    return this.postService.getAuthor(userId).pipe(
      delay(500),
      tap((user: User) => {
        this.drawerFacadeService.open(UserDetailComponent, user);
      })
    );
  }
}
