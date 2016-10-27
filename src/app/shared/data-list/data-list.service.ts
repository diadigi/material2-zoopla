import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class DataListService {
  private baseUrl = 'http://api.zoopla.co.uk/api/v1/';
  private key = 'yuwrerzrmsdjjx62tkwt6gkx';

  constructor(private http: Http) {}

  getListingsByPostcode(code: string): Observable<string[]> {
    return this.http.get(this.baseUrl + 'property_listings.js?callback=JSON_CALLBACK&postcode=' + code + '&api_key=' + this.key)
                    .map((res: Response) => res.json())
                    .do(data => console.log('server data:', data))  // debug
                    .catch(this.handleError);
  }

  getAvgSoldPrices(code: string): Observable<string[]> {
    return this.http.get(this.baseUrl
                            + 'average_sold_prices.js?callback=JSON_CALLBACK&postcode='
                            + code
                            + '&output_type=outcode&area_type=postcodes&api_key='
                            + this.key)
                    .map((res: Response) => res.json())
                    .do(data => console.log('server data:', data))  // debug
                    .catch(this.handleError);
  }

  getRichlist(code: string): Observable<string[]> {
    return this.http.get(this.baseUrl
                            + 'richlist.js?callback=JSON_CALLBACK&postcode='
                            + code
                            + '&output_type=outcode&area_type=postcodes&api_key='
                            + this.key)
                    .map((res: Response) => res.json())
                    .do(data => console.log('server data:', data))  // debug
                    .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
