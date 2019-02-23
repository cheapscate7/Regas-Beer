import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Beer } from '../models/beer';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit, OnDestroy {
  public beers: Beer[] = [];
  private subscriptions = new Map();

  constructor(private backendService: BackendService, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscriptions.set(0, this.backendService.getAllOfType('bieren').subscribe(
      data => {
        this.beers = data;
        this.ref.markForCheck();
      }
    ));
    console.log(this.beers);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

}
