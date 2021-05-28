import { Component, OnInit } from '@angular/core';
import {ProductService} from '../products/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
   templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = 'Product Detail';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `:  ${id}`
  }

  onBack(): void{
    this.router.navigate(['/products'])
  }

}
