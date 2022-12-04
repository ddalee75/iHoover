import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { CanvasImgComponent } from './canvas-img/canvas-img.component';
import { CanvasMachineComponent } from './canvas-machine/canvas-machine.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    CanvasImgComponent,
    CanvasMachineComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
