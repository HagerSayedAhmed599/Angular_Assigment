import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';
import { DiscountOffers } from '../shared/Interfaces';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
  products:any=[];
  //Discount:DiscountOffers=DiscountOffers.NoDiscount;
constructor(private productservice:ProductServiceService){}
ngOnInit(): void {
  this.productservice.GetAllProducts().subscribe(
    data=>{
     this.products=data;
    }
   );
}
}
