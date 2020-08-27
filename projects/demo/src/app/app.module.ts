import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorsModule } from '@packages/colors';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ColorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
