import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './products.service';

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>
  //           <h2>This is test program</h2>`,
  templateUrl: 'app/app.component.html',
  providers: [ProductService]
})
export class AppComponent  {
  title: string = 'Hello World';
  appStatus: boolean = true;
  users: any[] = [
    {
      'id': '1',
      'name': 'Maimit',
      'image': 'app/images/images_1.jpg'
    },
    {
      'id': '2',
      'name': 'Chintan',
      'image': 'app/images/images_2.jpg'
    }
  ];
  products: Product[];
  constructor(private _product: ProductService) {
  }
  ngOnInit(): void {
     this._product.getProducts()
     .subscribe(products => this.products = products);
  }
}
