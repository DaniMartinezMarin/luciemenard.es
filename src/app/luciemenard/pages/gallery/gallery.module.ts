import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { CanvasLadiesComponent } from './pages/canvas-ladies/canvas-ladies.component';


@NgModule({
  declarations: [
    GalleryComponent,
    CanvasLadiesComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
