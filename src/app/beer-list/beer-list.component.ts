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
  private subscriptions = new Map();

  constructor(private backendService: BackendService, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    /*
    UNCOMMENT THIS IF GETTING DATA FROM DATABASE
    */
    this.subscriptions.set(0, this.backendService.getAllOfType('bieren').subscribe(
      data => {
        this.beers = data;
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
      this.beers = bieren;
      this.ref.markForCheck();
    } else {
      this.beers = this.beers.filter((beer) => {
        return beer.Bier.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
    }
  }

}
