import { Component, Input, ElementRef, AfterContentInit } from '@angular/core';
import { HighchartsService } from './highcharts.service';
import * as Highcharts from 'highcharts';

// import required axis break module
require('highcharts/modules/broken-axis.js')(Highcharts);

@Component({
  selector: 'highcharts',
  template: '<div class="highcharts-container"></div>',
  providers: [HighchartsService]
})
export class HighchartsComponent implements AfterContentInit {

  @Input()
  set config(value: Highcharts.Options) {
    this.highchartsService.config = value;
  }

  @Input()
  set title(value: Highcharts.TitleOptions) {
    this.highchartsService.title = value;
  }

  constructor(private elementRef: ElementRef, private highchartsService: HighchartsService) {}

  updateGraph() {
    this.highchartsService.updateChart();
  }

  ngAfterContentInit() {
    const ctx: any = this.elementRef.nativeElement.querySelector('.highcharts-container');
    this.highchartsService.initChart(ctx);
  }
}
