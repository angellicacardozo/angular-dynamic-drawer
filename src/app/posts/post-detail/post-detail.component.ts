import { Component, Inject, OnInit } from '@angular/core';
import { Post } from '../../../shared/classes/post.class';
import { DRAWER_DATA_INJECTION_TOKEN } from '../../../shared/services/drawer.facade';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post: Post | null = null;

  constructor(@Inject(DRAWER_DATA_INJECTION_TOKEN) data: Post) {
    this.post = data;
  }

  ngOnInit() {}
}
