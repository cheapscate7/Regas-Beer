import { Injectable } from '@angular/core';
import { Beverage } from './models/beer';
import { BackendService } from './backend.service';
import { BeverageOptions } from './types/BeverageOptions';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private beers: Beverage[] = [];

  constructor(private backend: BackendService) { }

  public getAllBeers() {
  }

  public getBeersFromType() {

  }
}
