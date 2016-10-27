import { Component, OnInit } from '@angular/core';
import { DataListService } from '../shared/data-list/data-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public listings: any[] = [];
  public soldPrices: any[] = [];
  public richlist: any[] = [];
  private errorMessage: string;

  constructor(public dataListService: DataListService) { }

  ngOnInit() {
  }

  private emptyData(): void {
    this.listings = [];
    this.soldPrices = [];
    this.richlist = [];
  }

  public searchListings(event: any, postcode: string): void {
    event.preventDefault();
    this.emptyData();

    this.dataListService.getListingsByPostcode(postcode)
      .subscribe(
        listings => this.listings = listings,
        error =>  this.errorMessage = <any>error
      );

    console.log('postcode', postcode);
  }

  public searchAvgSoldPrices(event: any, postcode: string): void {
    event.preventDefault();
    this.emptyData();

    this.dataListService.getAvgSoldPrices(postcode)
      .subscribe(
        soldPrices => this.soldPrices = soldPrices,
        error =>  this.errorMessage = <any>error
      );

    console.log('postcode', postcode);
  }

  public searchRichlist(event: any, postcode: string): void {
    event.preventDefault();
    this.emptyData();

    this.dataListService.getRichlist(postcode)
      .subscribe(
        richlist => this.richlist = richlist,
        error =>  this.errorMessage = <any>error
      );

    console.log('postcode', postcode);
  }

}
