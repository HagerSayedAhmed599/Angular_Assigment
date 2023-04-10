import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  list:any=[];
  @ViewChild(ProductsComponent) child!:ProductsComponent;
  imgStar:string="assets/lc.png"
  Data(){
    this.list=this.child.renderValues();
    console.log(this.list);
  }
}
