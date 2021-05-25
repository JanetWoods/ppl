import { Component, OnInit } from '@angular/core';
import {ProductsComponent} from '../products/products.component'
import {FormsModule} from '@angular/forms';
import { IProduct } from '../products/product';
import {StarComponent} from '../star/star.component';
import {ProductService} from '../products/product.service';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  onNotify(message: string):void{}

  pageTitle = "Product List";
    imageWidth = 50;
    imageMargin = 2;
    otherWidth = 75;
    wider = 95;
    widest=180;
    productMargin=5;
    showImage = false;

    private _listFilter: string = '';

    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string){
      this._listFilter = value;
      console.log('In setter: ', value);
      this.filteredProducts = this.performFilter(value);
    }


    toggleImage(): void{
      this.showImage = !this.showImage;
    }
    filteredProducts: IProduct[] = [];

    products: IProduct[]= [

    ];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked(message: string): void{
    this.pageTitle = 'Product List ' + message;
  }
}
