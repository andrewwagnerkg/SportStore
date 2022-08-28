import { Product } from './../../model/product.model';
import { ProductRepository } from './../../model/product.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private productRep: ProductRepository) { }

  ngOnInit(): void {
  }

  get products() : Product[]{
    return this.productRep.getProducts();
  }

  get categories() : string []{
    return this.productRep.getCategories();
  }

}
