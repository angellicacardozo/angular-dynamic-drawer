import { Component, Inject, Input, OnInit } from '@angular/core';
import { User } from '../../../shared/classes/user.class';
import { DRAWER_DATA_INJECTION_TOKEN } from '../../../shared/services/drawer.facade';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user: User | null = null;

  constructor(@Inject(DRAWER_DATA_INJECTION_TOKEN) data: User) {
    this.user = data;
  }

  ngOnInit() {}
}
