import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './luciemenard/pages/biography/biography.component';
import { ContactComponent } from './luciemenard/pages/contact/contact.component';
import { HomeComponent } from './luciemenard/pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'biography',
    component: BiographyComponent
  },
  {
    path: 'gallery',
    loadChildren: () => import('./luciemenard/pages/gallery/gallery-routing.module').then( m => m.GalleryRoutingModule )
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
