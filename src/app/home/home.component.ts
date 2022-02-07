import { Component, OnInit } from '@angular/core';
import { productInterfase, ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  products:productInterfase[] = [];

  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.products = this.ps.getProducts();
  }
}
