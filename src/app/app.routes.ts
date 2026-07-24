import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/home.page';
import { PostsPageComponent } from './features/posts/posts.page';
import { PostDetailPageComponent } from './features/posts/post-detail/post-detail.page';

export const APP_ROUTES: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'posts/:slug', component: PostDetailPageComponent },
  { path: 'posts', component: PostsPageComponent },
  { path: '**', redirectTo: '' },
];
