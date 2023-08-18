import { NgModule } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../../shared/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: PostListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [PostListComponent],
})
export class PostsModule {}
