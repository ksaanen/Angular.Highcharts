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

  get xAxis() {
    return this.options.xAxis;
  }

  get yAxis() {
    return this.options.yAxis;
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

  set xAxisBreak(value: Highcharts.AxisBreak) {
    this.xAxis.breaks = [value];
    this.updateChart();
  }

  set yAxisBreak(value: Highcharts.AxisBreak) {
    this.yAxis.breaks = [value];
    this.updateChart();
  }

  set xAxisTitle(value: Highcharts.AxisTitle) {
    this.xAxis.title = value;
    this.updateChart();
  }

  set yAxisTitle(value: Highcharts.AxisTitle) {
    this.yAxis.title = value;
    this.updateChart();
  }

  set config(value: Highcharts.Options) {
    Object.assign(this.options, value);
  }

  get series(){
    return this.options.series;
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
