import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../models/beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  @Input() beer: Beer;
  // tslint:disable-next-line:max-line-length
  public beerIcon = '../assets/clinking-beer-mugs.png'; // usually, I would store icons in the database but I am not going to add 400+ icons for each beer

  constructor() { }

  ngOnInit() {
  }

}
