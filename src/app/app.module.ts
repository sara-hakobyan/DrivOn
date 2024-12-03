import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxParallaxModule } from '@yoozly/ngx-parallax';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { CountersComponent } from './components/pages/counters/counters.component';
import { CountdownsComponent } from './components/pages/countdowns/countdowns.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { PricingsComponent } from './components/pages/pricings/pricings.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { About } from './components/pages/about/about.component';
import { Services } from './components/pages/services/services.component';
import { GoogleMapsModule } from '@angular/google-maps';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeFiveComponent,
    BlogComponent,
    BlogDetailsComponent,
    CountersComponent,
    CountdownsComponent,
    TestimonialsComponent,
    PricingsComponent,
    ErrorComponent,
    ComingSoonComponent,
    About,
    Services,
  ],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserModule,
    GoogleMapsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    NgxParallaxModule,
    BrowserAnimationsModule,
    NgxScrollTopModule,
    NgCircleProgressModule.forRoot({}),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
