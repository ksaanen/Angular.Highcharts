import { Component, Input, AfterContentInit, OnDestroy } from '@angular/core';
import { HighchartsService } from './highcharts.service';

@Component({
  selector: 'highcharts-yaxis',
  template: ' '
})

export class HighchartsYAxisComponent implements AfterContentInit, OnDestroy {

  @Input()
  set id(value: string) {
    this._yAxis.id = value;
  }

  @Input()
  set visible(value: boolean) {
    this._yAxis.visible = value;
  }

  @Input()
  set ceiling(value: number){
    this._yAxis.ceiling = value;
  }

  @Input()
  set floor(value: number){
    this._yAxis.floor = value;
  }

  @Input()
  set breakStart(value: number) {
    this._yAxisBreak.from = value;
  }

  @Input()
  set breakEnd(value: number) {
    this._yAxisBreak.to = value;
  }

  @Input()
  set breakSize(value: number) {
    this._yAxisBreak.breakSize = value;
  }

  @Input()
  set categories(array: any[]) {
    this._yAxis.categories = array;
  }

  @Input()
  set label(value: string){
    this._yAxisTitle.text = value;
  }

  private _yAxis: Highcharts.AxisOptions = {};
  private _yAxisBreak: Highcharts.AxisBreak = {};
  private _yAxisTitle: Highcharts.AxisTitle = {};

  constructor(private highchartsService: HighchartsService) {}

  ngAfterContentInit() {
    this.highchartsService.yAxis = this._yAxis;
    this.highchartsService.yAxisBreak = this._yAxisBreak;
    this.highchartsService.yAxisTitle = this._yAxisTitle;
  }

  ngOnDestroy() {
    // this.highchartsService.removeXAxis(this.YAxis);
  }
}
