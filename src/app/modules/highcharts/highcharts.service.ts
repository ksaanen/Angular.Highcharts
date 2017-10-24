import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable()
export class HighchartsService {

  private _chartObject: Highcharts.ChartObject;
  private _options: Highcharts.Options = {};

  initChart(ctx: string) {
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

  addSerie(seriesObject: Highcharts.IndividualSeriesOptions) {
    this._chartObject.addSeries(seriesObject);
    this.redrawChart();
  }

  removeSerie(seriesObject: Highcharts.IndividualSeriesOptions) {
    for (let s of this._chartObject.series) {
      if (s.name === seriesObject.name) {
        s.remove(true);
      }
    }
  }

  updateChart() {
    if (this._chartObject) {
      this._chartObject.update(this.options);
    }
  }

  redrawChart() {
    if (this._chartObject) {
      this._chartObject.redraw();
    }
  }

}
