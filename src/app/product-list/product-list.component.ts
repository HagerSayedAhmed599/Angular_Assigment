import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  ProductList:any=[];
  constructor(private productService:ProductServiceService,private router:Router,private activateRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.productService.GetAllProducts().subscribe(
      data=>{
       this.ProductList=data;
      }
     );
  }
  discountPage(){
    this.router.navigate(["discount"],{relativeTo:this.activateRoute});
  }
  noDiscountPage(){
    this.router.navigate(["noDiscount"],{relativeTo:this.activateRoute});
  }
}
