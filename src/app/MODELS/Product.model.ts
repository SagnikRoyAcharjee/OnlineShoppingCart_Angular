export class Product{
    id!:number;
    name:string='';
    productDescription:string='';
    price!:number;
    productImage:string='';
    categoryId:number=0;
    categoryName:string='';
    isSelected?:boolean;
}