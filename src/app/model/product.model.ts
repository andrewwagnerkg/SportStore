export class Product{
  constructor(
    public id?: number,
    public name?: string,
    public category?:string | null,
    public description?:string,
    public price?: number
  ){}
}
