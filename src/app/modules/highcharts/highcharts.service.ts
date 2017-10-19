import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable()
export class HighchartsService {

  private _chartObject: Highcharts.ChartObject;
  private _options: Highcharts.Options = {};
  private _series: Object[] = [];

  initChart(ctx: string) {
    if (this._chartObject) {
      this._chartObject.update(this.options);
    }
    this._chartObject = new Highcharts.Chart(ctx, this.options);
  }

  get options(){
    return this._options;
  }

  set xAxis(value: Highcharts.AxisOptions) {
    this.options.xAxis = value;
    this.updateChart();
  }

  set yAxis(value: Highcharts.AxisOptions) {
    this.options.yAxis = value;
    this.updateChart();
  }

  set title(value: Highcharts.TitleOptions) {
    this.options.title = value;
    this.updateChart();
  }

  set config(value: Highcharts.Options) {
    Object.assign(this.options, value);
  }

  set series(value: Object[]){
    this.options.series = value;
  }

  addSerie(seriesObject: Highcharts.SeriesOptions) {
    this._series.push(seriesObject);
    this.options.series = this._series;
    this.updateChart();
  }

  removeSerie(seriesObject: Highcharts.SeriesOptions) {
    const index = this.series.indexOf(seriesObject);
    if (index > -1) {
      this.series.splice(index, 1);
    }
    this.options.series = this.series;
    this.updateChart();
  }

  updateChart() {
    if (this._chartObject) {
      this._chartObject.update(this.options);
    }
  }

}
