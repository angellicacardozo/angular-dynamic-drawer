import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./user/user.module').then((module) => module.UserModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then((module) => module.PostsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
