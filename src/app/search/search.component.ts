import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() change = new EventEmitter();
  private text = '';

  constructor() { }

  ngOnInit() {
  }

  public textChange(value) {
    this.text = value;
    this.change.emit(this.text);
  }

}
