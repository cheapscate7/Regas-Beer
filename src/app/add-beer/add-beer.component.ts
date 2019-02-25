import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.scss']
})
export class AddBeerComponent implements OnInit {

  public open = false;
  constructor() { }

  ngOnInit() {
  }

  public toggle () {
    this.open = !this.open;
  }

}
