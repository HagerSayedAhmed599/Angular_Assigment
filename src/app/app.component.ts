import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { Iproduct } from './shared/Interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lab1Solution';
  list:any=[];
  @ViewChild(ProductsComponent) child!:ProductsComponent;
  imgStar:string="assets/lc.png"
  Data(){
    this.list=this.child.renderValues();
    console.log(this.list);
  }
}
