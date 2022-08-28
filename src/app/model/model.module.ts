import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { NgModule } from '@angular/core';

@NgModule({
  providers:[ProductRepository, StaticDataSource]
})
export class ModelModule { }
