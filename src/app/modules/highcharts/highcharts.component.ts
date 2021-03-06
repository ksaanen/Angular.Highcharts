import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { HighchartsService } from './highcharts.service';
import * as Highcharts from 'highcharts';

// import required axis break module
require('highcharts/modules/broken-axis.js')(Highcharts);

@Component({
  selector: 'highcharts',
  template: '<div class="highcharts-container"></div>',
  providers: [HighchartsService]
})
export class HighchartsComponent implements OnInit {

  private _title: Highcharts.TitleOptions = {};

  constructor(private elementRef: ElementRef, private highchartsService: HighchartsService) {}

  @Input()
  set config(value: Highcharts.Options) {
    this.highchartsService.config = value;
  }

  @Input()
  set titleText(value: string) {
    this._title.text = value;
  }

  updateChart() {
    this.highchartsService.updateChart();
  }

  ngOnInit() {
    this.highchartsService.title = this._title;
    const ctx: any = this.elementRef.nativeElement.querySelector('.highcharts-container');
    this.highchartsService.initChart(ctx);
  }

}
