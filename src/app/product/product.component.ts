import {ApplicationRef, Component, OnInit} from '@angular/core';
import {RepositoryModel} from '../repository.model';
import {Product} from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  model:RepositoryModel=new RepositoryModel();
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
  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }
  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }
  getProducts():Product[]{
    return this.model.getProducts();
  }
  getProductCount():number{
    console.log("getProductCount invoked");
    return this.getProducts().length;
  }
  getKey(index: number, product: Product){
    return product.id;
  }
  get nextProduct(): Product {
    return this.model.getProducts().shift();
  }
  getProductPrice(index: number): number {
    return Math.floor(this.getProduct(index).price);
  }

  selectedProduct: string;
  getSelected(product:Product):boolean{
    return product.name == this.selectedProduct;
  }
}
