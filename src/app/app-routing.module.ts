import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { About } from './components/pages/about/about.component';
import { Services } from './components/pages/services/services.component';

const routes: Routes = [
  { path: '', component: HomeFiveComponent },
  { path: 'about', component: About },
  { path: 'home-five', component: HomeFiveComponent },
  { path: 'services', component: Services },
  { path: '**', component: ErrorComponent },
  { path: '', redirectTo: '/home-five', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
