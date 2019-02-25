import { Component, ChangeDetectorRef } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'regas-beer';
  language = 'en';
  constructor(public translate: TranslateService, private ref: ChangeDetectorRef) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  public changeLanguage(lang: string) {
    if (lang === 'en' || 'nl') {
      this.translate.use(lang);
      this.language = lang;
      this.ref.markForCheck();
    }
  }
}
