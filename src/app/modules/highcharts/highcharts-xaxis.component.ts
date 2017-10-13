import { Component, Input, AfterContentInit, OnDestroy } from '@angular/core';
import { HighchartsService } from './highcharts.service';
import { Chart } from 'highcharts';

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
  set label(value: string){
    this.XAxis.title.text = value;
  }

  private XAxis: Highcharts.AxisOptions = {
    title: {}
  };

  constructor(private highchartsService: HighchartsService) {}

  ngAfterContentInit() {
    this.highchartsService.xAxis(this.XAxis);
  }

  ngOnDestroy() {
    // this.highchartsService.removeXAxis(this.XAxis);
  }
}
