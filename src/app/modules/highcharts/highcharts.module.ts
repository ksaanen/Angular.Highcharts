import { NgModule } from '@angular/core';
import { HighchartsComponent } from './highcharts.component';
import { HighchartsDataComponent } from './highcharts-data.component';
import { HighchartsAxesComponent } from './highcharts-axes.component';
import { HighchartsYAxisComponent } from './highcharts-yaxis.component';
import { HighchartsXAxisComponent } from './highcharts-xaxis.component';
import { HighchartsService } from './highcharts.service';

@NgModule({
  declarations: [
    HighchartsComponent,
    HighchartsDataComponent,
    HighchartsAxesComponent,
    HighchartsXAxisComponent,
    HighchartsYAxisComponent
  ],
  exports: [
    HighchartsComponent,
    HighchartsDataComponent,
    HighchartsAxesComponent,
    HighchartsXAxisComponent,
    HighchartsYAxisComponent
  ],
  providers: [
    HighchartsService
  ]
})
export class HighchartsModule {}
