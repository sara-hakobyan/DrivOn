import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'drivOn';
  showFooter = true;

  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('en');

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/error' || event.url === '/coming-soon') {
          this.showFooter = false;
        } else {
          this.showFooter = true;
        }
      }
    });
  }

  localesList = [
    {
      code: 'en-US',
      label: 'English',
    },
    {
      code: 'ru',
      label: 'Russian',
    },
  ];
}
