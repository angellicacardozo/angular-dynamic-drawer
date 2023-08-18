import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/modules/shared.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';

@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    UserModule,
    PostsModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
