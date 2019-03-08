import {ProductModel} from './product.model';

export class SimpleDataSource {
  private data: ProductModel[];

  constructor() {
    this.data = new Array<ProductModel>(
      new ProductModel(1, "Kayak", "Watersports", 275),
      new ProductModel(2, "Lifejacket", "Watersports", 48.95),
      new ProductModel(3, "Soccer Ball", "Soccer", 19.50),
      new ProductModel(4, "Corner Flags", "Soccer", 34.95),
      new ProductModel(5, "Thinking Cap", "Chess", 16)
    );
  }

  getData(): ProductModel[] {
    return this.data;
  }
}
