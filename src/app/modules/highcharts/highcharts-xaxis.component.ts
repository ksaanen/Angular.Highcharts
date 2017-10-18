import { Component, Input, AfterContentInit, OnDestroy } from '@angular/core';
import { HighchartsService } from './highcharts.service';

@Component({
  selector: 'highcharts-xaxis',
  template: ' '
})

export class HighchartsXAxisComponent implements AfterContentInit, OnDestroy {

  @Input()
  set id(value: string) {
    this._xAxis.id = value;
  }

  @Input()
  set visible(value: boolean) {
    this._xAxis.visible = value;
  }

  @Input()
  set ceiling(value: number){
    this._xAxis.ceiling = value;
  }

  @Input()
  set floor(value: number){
    this._xAxis.floor = value;
  }

  @Input()
  set breakStart(value: number) {
    this._xAxisBreak.from = value;
  }

  @Input()
  set breakEnd(value: number) {
    this._xAxisBreak.to = value;
  }

  @Input()
  set breakSize(value: number) {
    this._xAxisBreak.breakSize = value;
  }

  @Input()
  set categories(array: any[]) {
    this._xAxis.categories = array;
  }

  @Input()
  set label(value: string){
    this._xAxisTitle.text = value;
  }

  private _xAxis: Highcharts.AxisOptions = {};
  private _xAxisBreak: Highcharts.AxisBreak = {};
  private _xAxisTitle: Highcharts.AxisTitle = {};

  constructor(private highchartsService: HighchartsService) {}

  ngAfterContentInit() {
    this.highchartsService.xAxis = this._xAxis;
    this.highchartsService.xAxisBreak = this._xAxisBreak;
    this.highchartsService.xAxisTitle = this._xAxisTitle;
  }

  ngOnDestroy() {
    // this.highchartsService.removeXAxis(this.XAxis);
  }
}
