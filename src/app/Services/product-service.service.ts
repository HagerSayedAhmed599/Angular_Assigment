import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../shared/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
 url:string="/assets/Data/ProductList.json"
  constructor(private http:HttpClient) { }
  GetAllProducts():Observable<Iproduct[]>{
     return this.http.get<Iproduct[]>(this.url);
  };
  products:any=this.GetAllProducts();
  GetProductById(prdId:number){
    this.products.array.forEach((((element :{
      id:Number;name:String; quantity:Number;price:Number;img:String;
    })=>{
      if(element.id==prdId){
      return {id:element.id,name:element.name,quantity:element.quantity,price:element.price,img:element.img}
    }
    return null;
  })))
    
  }
}
