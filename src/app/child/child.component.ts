import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  ProductList:any=[
    {id:1, name:"shoes",quantity:2,price:200,img:"shoes.png"},
    {id:2, name:"shirt",quantity:4,price:400,img:"t-shirt.png"},
    {id:1, name:"shoes",quantity:2,price:200,img:"shoes.png"},
    {id:2, name:"shirt",quantity:4,price:400,img:"t-shirt.png"}
  ];
  @Output() sentToParent=new EventEmitter();
  sendData(){
    this.sentToParent.emit(this.ProductList);
  }
    SayWelcome(){
      console.log("Welcome");
    }
}
