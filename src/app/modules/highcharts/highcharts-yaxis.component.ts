import { Component, Input, AfterContentInit, OnDestroy } from '@angular/core';
import { HighchartsService } from './highcharts.service';

@Component({
  selector: 'highcharts-yaxis',
  template: ' '
})

export class HighchartsYAxisComponent implements AfterContentInit, OnDestroy {

  private _title: Highcharts.AxisTitle = {};
  private _breaks: Highcharts.AxisBreak = {};
  private _axis: Highcharts.AxisOptions = {
    title: this._title,
    breaks: [this._breaks]
  };

  constructor(private highchartsService: HighchartsService) {}

  get yAxis() {
    return this._axis;
  }

  @Input()
  set id(value: string) {
    this._axis.id = value;
  }

  @Input()
  set visible(value: boolean) {
    this._axis.visible = value;
  }

  @Input()
  set ceiling(value: number){
    this._axis.ceiling = value;
  }

  @Input()
  set floor(value: number){
    this._axis.floor = value;
  }

  @Input()
  set categories(array: any[]) {
    this._axis.categories = array;
  }

  @Input()
  set breakStart(value: number) {
    this._breaks.from = value;
  }

  @Input()
  set breakEnd(value: number) {
    this._breaks.to = value;
  }

  @Input()
  set breakSize(value: number) {
    this._breaks.breakSize = value;
  }

  @Input()
  set label(value: string){
    this._title.text = value;
  }

  ngAfterContentInit() {
    this.highchartsService.yAxis = this.yAxis;
  }

  ngOnDestroy() {
    // this.highchartsService.removeXAxis(this.XAxis);
  }

}
