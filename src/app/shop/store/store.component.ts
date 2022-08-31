import { Product } from './../../model/product.model';
import { ProductRepository } from './../../model/product.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public currentcategory : string | null = null
  public countPerPage = 3;
  public currentPageIndex = 1;

  constructor(private productRep: ProductRepository) { }

  ngOnInit(): void {
  }

  get products() : Product[]{
    let index = (this.currentPageIndex - 1) * this.countPerPage;
    return this.productRep.getProductsByCategory(this.currentcategory).slice(index, index + this.countPerPage);
  }

  get categories() : string []{
    return this.productRep.getCategories();
  }

  resetCategory():void{
    this.currentcategory = null;
    this.changePage(1);
  }

  setCategory(category:string):void{
    this.currentcategory = category;
    this.changePage(1);
  }

  changePage(newPage: number){
    this.currentPageIndex = newPage;
  }

  changePageSize(newsize: string){
    this.countPerPage = Number(newsize);
    this.changePage(1);
  }

  get pageNumbers(): number[]{
    return Array(Math.ceil(this.productRep
      .getProductsByCategory(this.currentcategory).length / this.countPerPage)).fill(0).map((x, i) => i + 1);
  }

}
