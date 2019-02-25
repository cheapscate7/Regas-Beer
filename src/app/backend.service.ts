import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BeverageOptions } from './types/BeverageOptions';
import { map } from 'rxjs/operators';
import { Beer } from './models/beer';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private dbURL = '/assets/db.json';
  constructor(private http: HttpClient) { }

  /**
   * returns every beverage with a certain type
   * @param type what type of beverage do you want to return (eg bieren)
   */
  public getAllOfType(type: BeverageOptions) {
    return this.http.get(this.dbURL).pipe(
      map(res => {
        if (!res) {
          this.noDataErrror();
        } else {
          return res[type];
        }
      }),
    );
  }

  /**
   * add a new type of beverage (eg wijnen)
   * @param type name of the type of beverage
   */
  public createType(type: string) {
  }

  public deleteOfType() {
    // delete a record of type
  }

  public addOfType(type: BeverageOptions, beverage) {
    console.log('backend service');
    console.log(JSON.stringify(beverage));
    this.http.post('${this.dbURL}', JSON.stringify(beverage));
  }


  private noDataErrror() {
    throw new Error('No data was returned from URL');
  }
}

