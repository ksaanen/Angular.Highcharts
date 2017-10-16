import { Component, Input, ElementRef, AfterContentInit } from '@angular/core';
import { Chart } from 'highcharts';
import { HighchartsService } from './highcharts.service';

@Component({
  selector: 'highcharts',
  template: '<div class="highcharts-container"></div>',
  providers: [HighchartsService]
})
export class HighchartsComponent implements AfterContentInit {

  @Input()
  set labels(value: (string | string[])[]) {
    this.chartService.labels = value;
  }

  @Input()
  set config(value: Highcharts.Options) {
    this.chartService.config = value;
  }

  constructor(private elementRef: ElementRef, private chartService: HighchartsService) {}

  ngAfterContentInit() {
    const ctx: any = this.elementRef.nativeElement.querySelector('.highcharts-container');
    this.chartService.initChart(ctx);
  }
}
