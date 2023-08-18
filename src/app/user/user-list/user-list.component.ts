import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DrawerFacadeService } from '../../../shared/services/drawer.facade';
import { User } from '../../../shared/classes/user.class';
import { UserService } from '../user.service';
import { UserDetailComponent } from '../../../shared/components/user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(
    private userService: UserService,
    private drawerFacadeService: DrawerFacadeService
  ) {}

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

  trackByUsers(_index: number, user: User) {
    return user.id;
  }

  dispatchOpenDrawer(user: User) {
    this.drawerFacadeService.open(UserDetailComponent, user);
  }
}
