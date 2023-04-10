import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { forbiddenName } from '../validtion/forbiddenName';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  products:any=[];
  constructor( private fb:FormBuilder, private productsService:ProductServiceService){}
  registerForm=this.fb.group({
    userName:['',[Validators.required, Validators.pattern("^[A-Za-z]+$"),forbiddenName(/admin/)]],
    check:[false],
    discount:[''],
    comments:this.fb.array([])
  });
    get getUserName(){
      return this.registerForm.get('userName');
     }
     get getDiscount(){
      return this.registerForm.get('discount');
     }
     get getComments(){
      return this.registerForm.get('comments') as FormArray;
     }
    ngOnInit(): void {
      this.productsService.GetAllProducts().subscribe(
        data=>{
         this.products=data;
        }
       );
    }
    addComment(){
      this.getComments.push(this.fb.control(''));
    }
    setDiscount(){
      this.registerForm.get('check')?.valueChanges.subscribe(checkedValue=>
        {
          if(checkedValue){
             this.getDiscount?.setValidators(Validators.required);
          }
          else{
             this.getDiscount?.clearValidators();
          }
           this.getDiscount?.updateValueAndValidity();
        }
        )
    }
}
