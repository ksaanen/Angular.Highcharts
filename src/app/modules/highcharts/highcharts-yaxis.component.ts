import { Component, Input, AfterContentInit, OnDestroy } from '@angular/core';
import { HighchartsService } from './highcharts.service';
import { Chart } from 'highcharts';

@Component({
  selector: 'highcharts-yaxis',
  template: ' '
})

export class HighchartsYAxisComponent implements AfterContentInit, OnDestroy {

  @Input()
  set id(value: string) {
    this.YAxis.id = value;
  }

  @Input()
  set visible(value: boolean) {
    this.YAxis.visible = value;
  }

  @Input()
  set ceiling(value: number){
    this.YAxis.ceiling = value;
  }

  @Input()
  set floor(value: number){
    this.YAxis.floor = value;
  }

  @Input()
  set label(value: string){
    this.YAxis.title.text = value;
  }

  private YAxis: Highcharts.AxisOptions = {
    title: {}
  };

  constructor(private highchartsService: HighchartsService) {}

  ngAfterContentInit() {
    this.highchartsService.yAxis(this.YAxis);
  }

  ngOnDestroy() {
    // this.highchartsService.removeXAxis(this.YAxis);
  }
}
