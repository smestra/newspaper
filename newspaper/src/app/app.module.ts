import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsGridComponent } from './components/news-grid/news-grid.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsGridComponent,
 ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
