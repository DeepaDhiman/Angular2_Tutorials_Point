import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Product } from './product';

@Injectable()
export class ProductService {
    private _producturl = 'app/product.json';
    constructor(private _http: Http) {}

    getProducts(): Observable<Product[]> {
        return this._http.get(this._producturl)
        .map((response: Response) => <Product[]> response.json())
        .do(data => console.log(JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw((error.json().error()));
    }
}
