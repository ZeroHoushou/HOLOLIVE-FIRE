import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListPostsModule } from '../posts/list-posts/list-posts.module';

const routes: Routes = [
  {
    path: '',
   component: AdminComponent,
    children:[
      {
        path:'posts',
        loadChildren: () =>
          import('../posts/list-posts/list-posts.module').then(
           m => m.ListPostsModule
        )

      }
      ,
       { path: 'profile',
        loadChildren: () =>
        import('./profile/profile.module').then(
          m => m.ProfileModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
