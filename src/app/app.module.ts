import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerComponent } from './beer/beer.component';
import { SearchComponent } from './search/search.component';
import { BackendService } from './backend.service';
import { BeerService } from './beer.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    BeerListComponent,
    BeerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BackendService,
    BeerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
