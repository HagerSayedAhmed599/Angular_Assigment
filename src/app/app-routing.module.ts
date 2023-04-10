import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { DiscountComponent } from './discount/discount.component';
import { NodiscountComponent } from './nodiscount/nodiscount.component';
import { Register1Component } from './register1/register1.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { Register2Component } from './register2/register2.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductListComponent,
   children:[{path:'discount',component:DiscountComponent},
   {path:'noDiscount',component:NodiscountComponent}
  ]
},
  {path:'users',component:UsersComponent},
  {path:'posts/:id',component:PostsComponent,
  children:[{path:'comments',component:CommentsComponent}]   
},
  {path:'posts',component:PostsComponent},
  {path:'register1',component:Register1Component},
  {path:'login1',component:Login1Component},
  {path:'login2',component:Login2Component},
  {path:'register2',component:Register2Component},
  {path:'notes',component:NotesComponent},
  {path:'comments/:id',component:CommentsComponent}

  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
