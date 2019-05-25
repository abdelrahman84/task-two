import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Product} from "../products"
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import { ProductOrigin} from '../product-origin';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
 


@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {
  
    Products: Array<Product>;

  private serverURL = 'http://arabiatanks.com/tanks_project/offers_module/apis/get?mobile=1';

  constructor (private http: HttpClient) {
  }

  getProducts() {
    return this.http.get(this.serverURL);
  
  }
     
}
