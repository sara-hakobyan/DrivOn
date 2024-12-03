import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isSticky: boolean = false;
  logo: string = 'assets/images/logo-white.png';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('am');
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  switchLanguage(event: Event): void {
    const selectedLanguage = (event.target as HTMLSelectElement).value; // Get the selected value
    console.log(selectedLanguage)
    this.translate.use(selectedLanguage); // Switch the language
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollTop > 100) {
      this.isSticky = true;
      this.logo = 'assets/images/logo-black.png';
    } else {
      this.isSticky = false;
      this.logo = 'assets/images/logo-white.png';
    }
  }

  isCollapsed = true;
}
