import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-nodiscount',
  templateUrl: './nodiscount.component.html',
  styleUrls: ['./nodiscount.component.scss']
})
export class NodiscountComponent implements OnInit {
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
