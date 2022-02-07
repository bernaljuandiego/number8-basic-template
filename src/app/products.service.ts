import { Injectable } from '@angular/core';
import json from 'src/assets/json/productList.json';

var products:productInterfase[] = json;

export interface productInterfase {
    ProductID?:      number;
    Name?:           string;
    Price?:          number;
    "Retail Price"?: number;
    ThumbnailURL?:   string;
    PictureURL?:     string;
    Description?:    string;
    Category?:       string;
    CategoryID?:     number;
    Brand?:          string;
    Color?:          string;
    Badges?:         string;
    "Rating Avg"?:   number;
    RatingCount?:    number;
    Stock?:          number;
    DateCreated?:    string;
    "Rating Count"?: number;
    RatingAvg?:      number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor() {}

  public getProducts():productInterfase[]{
    return products;
  }

  public getProduct(id:number):productInterfase{
    let product:productInterfase =products.find(product => product.ProductID == id)!;
    return product;
  }
}
