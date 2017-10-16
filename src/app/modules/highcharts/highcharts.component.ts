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
    this.chartService.config = value;
  }

  @Input()
  set title(value: string) {
    this.chartService.title = value;
  }

  constructor(private elementRef: ElementRef, private chartService: HighchartsService) {}

  ngAfterContentInit() {
    const ctx: any = this.elementRef.nativeElement.querySelector('.highcharts-container');
    this.chartService.initChart(ctx);
  }
}
