import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.scss']
})
export class NavbarComponentComponent implements OnInit {

  @Output() change = new EventEmitter<string>();
  @Input() language = 'en';
  constructor() { }

  ngOnInit() {
  }

  public onLanguageChangeEvent(language: string) {
    this.change.emit(language);
  }

}
