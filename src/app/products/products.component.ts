import { Component, OnInit } from '@angular/core';
import { Iproduct,DiscountOffers,Icategory } from '../shared/Interfaces';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Discount:DiscountOffers;
  storeName:string;
  StoreLogo:string;
  clientName:string;
  IsPurshased!:boolean;
  ProductList:Iproduct[];
  ProductList1:any=[];
  product:any={};
  CategoryList:Icategory[];
  //value: boolean = Discount === DiscountOffers['No Discount'];
  constructor(private productservice:ProductServiceService){
    this.Discount=DiscountOffers.Ten;
    this.storeName="lc";
    this.StoreLogo="lc.png"
    this.clientName="";
    //this.IsPurshased;
    this.ProductList=[
      {id:1, name:"shoes",quantity:2,price:200,img:"shoes.png"},
      {id:2, name:"shirt",quantity:4,price:400,img:"t-shirt.png"},
      {id:1, name:"shoes",quantity:2,price:200,img:"shoes.png"},
      {id:2, name:"shirt",quantity:4,price:400,img:"t-shirt.png"}
    ];
   
    this.CategoryList=[
      {id:1, name:"clothes"},
      {id:2, name:"Shoes"}
    ]
  }
  ShowDiv(){
    this.IsPurshased=!this.IsPurshased
  }
  ngOnInit(): void {
    this.productservice.GetAllProducts().subscribe(
      data=>{
       this.ProductList1=data;
      }
     );
     
  }
  ngAfterViewInit(){
     this.product=this.productservice.GetProductById(2);
    console.log(this.product);
    
  }
  renderValues(){
    this.productservice.GetAllProducts().subscribe(
      data=>{
       this.ProductList1=data;
      }
     );
     return this.ProductList1;
  }
  //if(Discount==DiscountOffers['10%'])
}
