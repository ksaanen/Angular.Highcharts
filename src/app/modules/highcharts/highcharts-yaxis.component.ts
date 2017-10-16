import { Component, Input, AfterContentInit, OnDestroy } from '@angular/core';
import { HighchartsService } from './highcharts.service';

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
  set breakStart(value: number) {
    this.YAxis.breaks[0].from = value;
  }

  @Input()
  set breakEnd(value: number) {
    this.YAxis.breaks[0].to = value;
  }

  @Input()
  set breakSize(value: number) {
    this.YAxis.breaks[0].breakSize = value;
  }

  @Input()
  set categories(array: Array<any>) {
    this.YAxis.categories = array;
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
