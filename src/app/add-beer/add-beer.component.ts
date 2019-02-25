import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/beer';
import { FormGroup, FormControl } from '@angular/forms';
import { bieren } from '../../assets/db.json';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.scss']
})
export class AddBeerComponent implements OnInit {

  public open = false;
  public profileForm = new FormGroup({
    Bier: new FormControl(''),
    Stijl: new FormControl(''),
    Stamwortgehalte: new FormControl(''),
    Alcoholpercentage: new FormControl(''),
    Gisting: new FormControl(''),
    Sinds: new FormControl(''),
    Brouwerij: new FormControl('')
   
  });
  constructor() { }

  ngOnInit() {
  }

  public toggle () {
    this.open = !this.open;
  }

  public submit(form) {
    bieren.push(form);
  }

}
