import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { productInterfase, ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  product!: productInterfase;
  fgh!: number;
  constructor(
    private ps: ProductsService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
    const productId:number = +this.route.snapshot.paramMap.get('id')!;
    this.product = this.ps.getProduct(productId);
    const rating = this.product['Rating Avg'];
    this.fgh = Math.floor(rating!);
    console.log(rating+"-"+this.product['Rating Avg']);
  }

}
