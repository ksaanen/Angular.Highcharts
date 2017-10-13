import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { HighchartsService } from './highcharts.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'highcharts-data',
  template: ' '
})

export class HighchartsDataComponent implements OnInit, OnDestroy {

  @Input()
  set type(value: string) {
    this.seriesObject.type = value;
  }

  @Input()
  set data(value: any) {
    this.seriesObject.data = value;
  }

  private seriesObject: Highcharts.SeriesOptions;

  constructor(private highchartsService: HighchartsService) {
    this.seriesObject = {};
  }

  ngOnInit() {
    this.highchartsService.addSerie(this.seriesObject);
  }

  ngOnDestroy() {
    this.highchartsService.removeSerie(this.seriesObject);
  }
}
