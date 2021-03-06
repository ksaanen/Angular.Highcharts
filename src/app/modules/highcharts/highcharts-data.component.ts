import { Component, Input, AfterContentInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { HighchartsService } from './highcharts.service';

@Component({
  selector: 'highcharts-data',
  template: ' '
})

export class HighchartsDataComponent implements AfterContentInit, OnDestroy, OnChanges {

  @Input()
  set type(value: string) {
    this.seriesObject.type = value;
  }

  @Input()
  set data(value: any) {
    this.seriesObject.data = value;
  }

  @Input()
  set color(value: string) {
    this.seriesObject.color = value;
  }

  @Input()
  set stack(value: string) {
    this.seriesObject.stack = value;
  }

  @Input()
  set yAxis(value: string) {
    this.seriesObject.yAxis = value;
  }

  @Input()
  set xAxis(value: string) {
    this.seriesObject.xAxis = value;
  }

  @Input()
  set name(value: string) {
    this.seriesObject.name = value;
  }

  @Input()
  set visible(value: boolean) {
    this.seriesObject.visible = value;
    this.highchartsService.updateChart();
  }

  private seriesObject: Highcharts.IndividualSeriesOptions = {};

  constructor(private highchartsService: HighchartsService) {
  }

  ngAfterContentInit() {
    this.highchartsService.addSerie(this.seriesObject);
  }

  ngOnDestroy() {
    this.highchartsService.removeSerie(this.seriesObject);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      this.highchartsService.updateSerie(this.seriesObject);
    }
  }

}
