import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { CanvasLadiesComponent } from './pages/canvas-ladies/canvas-ladies.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,

    children: [
      {
        path: 'the-ladies-on-paper',
        component: CanvasLadiesComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
