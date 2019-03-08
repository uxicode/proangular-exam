import {SimpleDataSource} from './simpleDataSource';
import {ProductModel} from './product.model';

export class RepositoryModel {
  private dataSource:SimpleDataSource;
  private products: ProductModel[];
  private locator=(p:ProductModel, id:number)=>p.id==id;

  constructor() {
    this.dataSource=new SimpleDataSource();
    this.products=new Array<ProductModel>();
    this.dataSource.getData().forEach(p=>this.products.push(p))
  }

  getProducts(): ProductModel[] {
    return this.products;
  }

  getProduct(id:number):ProductModel{
    return this.products.find( p =>  this.locator(p, id) );
  }

  saveProduct(product:ProductModel){
    if (product.id == 0 || product.id == null) {
      product.id=this.generateID();
      this.products.push(product);
    }else{
      let index=this.products.findIndex( p=>this.locator(p, product.id) );
      this.products.splice(index, 1, product);
    }
  }

  deleteProduct(id: number) {
    let index = this.products.findIndex(p => this.locator(p, id));
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  swapProduct(){
    let p=this.products.shift();
    this.products.push(new ProductModel(p.id, p.name, p.category, p.price));
  }

  private generateID():number{
    let candidate=100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
