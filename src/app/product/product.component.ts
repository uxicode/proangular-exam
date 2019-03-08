import {ApplicationRef, Component, OnInit} from '@angular/core';
import {RepositoryModel} from '../repository.model';
import {ProductModel} from '../product.model';
import {NgForm} from '@angular/forms';
import {ProductFormGroup} from '../form.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  model:RepositoryModel=new RepositoryModel();
  form: ProductFormGroup = new ProductFormGroup();
  counter: number = 1;
  constructor(ref:ApplicationRef) {
    /* console.log( this.model.getProduct(2) )*/
    (<any>window).appRef=ref;
    (<any>window).model=this.model;
  }
  getClasses():string{
    return this.model.getProducts().length == 5 ? 'bg-success' : 'bg-warning';
  }
  getStyles(key:number){
    let product=this.model.getProduct(key);
    return{
      fontSize:'30px',
      'margin.px':100,
      color:product.price>50? 'red':'green'
    }
  }
  getProductByPosition(position: number): ProductModel {
    return this.model.getProducts()[position];
  }
  getProduct(key: number): ProductModel {
    return this.model.getProduct(key);
  }
  getProducts():ProductModel[]{
    return this.model.getProducts();
  }
  getProductCount():number{
    console.log("getProductCount invoked");
    return this.getProducts().length;
  }
  getKey(index: number, product: ProductModel){
    return product.id;
  }
  get nextProduct(): ProductModel {
    return this.model.getProducts().shift();
  }
  getProductPrice(index: number): number {
    return Math.floor(this.getProduct(index).price);
  }
 //==========여기부터 using events and forms =============
  selectedProduct: string='';
  getSelected(product:ProductModel):boolean{
    return product.name == this.selectedProduct;
  }

  newProduct: ProductModel = new ProductModel();
  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }
  addProduct(p: ProductModel) {
    console.log("New Product: " + this.jsonProduct);
  }

  formSubmitted:boolean=false;
  submitForm(form: NgForm) {
    this.formSubmitted=true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new ProductModel();
      form.reset();
      this.formSubmitted=false;
    }
  }

}
