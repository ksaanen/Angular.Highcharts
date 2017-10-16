import { Component, Input, AfterContentInit, OnDestroy } from '@angular/core';
import { HighchartsService } from './highcharts.service';

@Component({
  selector: 'highcharts-xaxis',
  template: ' '
})

export class HighchartsXAxisComponent implements AfterContentInit, OnDestroy {

  @Input()
  set id(value: string) {
    this.XAxis.id = value;
  }

  @Input()
  set visible(value: boolean) {
    this.XAxis.visible = value;
  }

  @Input()
  set ceiling(value: number){
    this.XAxis.ceiling = value;
  }

  @Input()
  set floor(value: number){
    this.XAxis.floor = value;
  }

  @Input()
  set breakStart(value: number) {
    this.XAxis.breaks[0].from = value;
  }

  @Input()
  set breakEnd(value: number) {
    this.XAxis.breaks[0].to = value;
  }

  @Input()
  set breakSize(value: number) {
    this.XAxis.breaks[0].breakSize = value;
  }

  @Input()
  set categories(array: Array<any>) {
    this.XAxis.categories = array;
  }

  @Input()
  set label(value: string){
    this.XAxis.title.text = value;
  }

  private XAxis: Highcharts.AxisOptions;

  constructor(private highchartsService: HighchartsService) {
    this.XAxis = {
      title: {},
      breaks: [{}]
    };
  }

  ngAfterContentInit() {
    this.highchartsService.xAxis(this.XAxis);
  }

  ngOnDestroy() {
    // this.highchartsService.removeXAxis(this.XAxis);
  }
}
