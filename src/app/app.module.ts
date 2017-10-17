import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HighchartsModule } from './modules/highcharts';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HighchartsModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
