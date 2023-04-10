import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstappComponent } from './firstapp/firstapp.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { DiscountComponent } from './discount/discount.component';
import { NodiscountComponent } from './nodiscount/nodiscount.component';
import { Register1Component } from './register1/register1.component';
import { Login1Component } from './login1/login1.component';
import { Register2Component } from './register2/register2.component';
import { Login2Component } from './login2/login2.component';
import { NotesComponent } from './notes/notes.component'
@NgModule({
  declarations: [
    AppComponent,
    FirstappComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    ProductListComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    PostDetailsComponent,
    DiscountComponent,
    NodiscountComponent,
    Register1Component,
    Login1Component,
    Register2Component,
    Login2Component,
    NotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
