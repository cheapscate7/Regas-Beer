import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Beer } from '../models/beer';
import { BackendService } from '../backend.service';
import { bieren } from '../../assets/db.json';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit, OnDestroy {
  public beers: Beer[];
  private beerSearchList: Beer[];
  private subscriptions = new Map();

  constructor(private backendService: BackendService, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscriptions.set(0, this.backendService.getAllOfType('bieren').subscribe(
      data => {
        this.beers = data;
        this.beerSearchList = data;
        this.ref.markForCheck();
      }
    ));
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  public search(text: string) {
    if (text === '') {
      this.beers = this.beerSearchList;
    } else {
      this.beers = this.beerSearchList.filter((beer) => {
        return beer.Bier.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
    }
    this.ref.markForCheck();

  }

}
