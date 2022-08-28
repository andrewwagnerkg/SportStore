import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository{
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe(data =>{
      this.products = data;
      this.categories = data.map(p => p.category ?? "")
      .filter((category, index, array) => array.indexOf(category) == index).sort();
    });
  }

  getProductsByCategory(category: string = ""): Product[]{
    return this.products.filter(p => p.category == "" || p.category == category);
  }

  getProducts(): Product[]{
    return this.products;
  }

  getProductById(id: number){
    return this.products.filter(p => p.id == id);
  }

  getCategories(){
    return this.categories;
  }
}
