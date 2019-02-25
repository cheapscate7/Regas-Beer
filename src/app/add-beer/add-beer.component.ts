import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/beer';
import { FormGroup, FormControl } from '@angular/forms';
import { bieren } from '../../assets/db.json';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.scss']
})
export class AddBeerComponent implements OnInit {

  public open = false;
  // public profileForm = new FormGroup({
  //   Bier: new FormControl(''),
  //   Stijl: new FormControl(''),
  //   Stamwortgehalte: new FormControl(''),
  //   Alcoholpercentage: new FormControl(''),
  //   Gisting: new FormControl(''),
  //   Sinds: new FormControl(''),
  //   Brouwerij: new FormControl('')
  // });
  public model = {};

  constructor(private backendService: BackendService) { }

  ngOnInit() {
  }

  public toggle () {
    this.open = !this.open;
  }

  public submit() {
    console.log(this.model);
   this.backendService.addOfType('bieren', this.model);
  }

}
