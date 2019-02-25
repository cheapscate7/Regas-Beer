import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerComponent } from './beer/beer.component';
import { SearchComponent } from './search/search.component';
import { BackendService } from './backend.service';
import { BeerService } from './beer.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AddBeerComponent } from './add-beer/add-beer.component';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    BeerListComponent,
    BeerComponent,
    SearchComponent,
    AddBeerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [
    BackendService,
    BeerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
