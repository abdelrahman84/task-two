import { Component, OnInit  } from '@angular/core';
import {ProductSearchService} from './_services/product-search.service';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map'
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductSearchService]
})
export class AppComponent implements OnInit {


 
  public products;
  
  constructor(private productSearchService: ProductSearchService) {
   
  }
  ngOnInit() {
        this.productSearchService.getProducts().subscribe(
          results=> {
            this.products = results;
            console.log(this.products);
            return this.products;
          });       
         
  }
  
  title = 'tasktwo';
}
