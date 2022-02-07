import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { productInterfase, ProductsService } from '../products.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  product!: productInterfase;
  fgh!: number;
  bolShow = false;
  constructor(
    private ps: ProductsService,
    private route:ActivatedRoute,
    public dialog: MatDialog
  ) { }

  openDialog() {
    if(this.product.Stock! > 0){
      this.dialog.open(DialogDataExampleDialog);
    } 
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
    const productId:number = +this.route.snapshot.paramMap.get('id')!;
    this.product = this.ps.getProduct(productId);
    const rating = this.product['Rating Avg'];
    this.fgh = Math.floor(rating!);
    if(this.product.Stock! > 0){
      this.bolShow=true;
    }
    console.log(this.bolShow);
  }
}
@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor() {}
}

