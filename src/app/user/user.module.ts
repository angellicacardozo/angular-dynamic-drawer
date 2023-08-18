import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared.module';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [{ path: '', component: UserListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [UserListComponent],
})
export class UserModule {}
