import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable()
export class HighchartsService {
  private chartObject: Highcharts.ChartObject;
  private options: Highcharts.Options = {};
  private series: Array<Object> = [];

  initChart(ctx: string) {
    if (this.chartObject) {
      this.chartObject.redraw();
    }
    this.chartObject = new Highcharts.Chart(ctx, this.getOptions());
  }

  xAxis(xAxe: Highcharts.Options) {
    this.options.xAxis = xAxe;
    this.updateChart();
  }

  yAxis(yAxe: Highcharts.AxisOptions) {
    this.options.yAxis = yAxe;
    this.updateChart();
  }

  addSerie(seriesObject: Highcharts.SeriesOptions) {
    this.series.push(seriesObject);
    this.options.series = this.series;
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

  set labels(labels: (string | string[])[]) {
    // this.chartData.labels = labels;
    this.updateChart();
  }

  set config(value: Object) {
    Object.assign(this.options, value);
  }

  private updateChart() {
    if (this.chartObject) {
      this.chartObject.redraw();
    }
  }

  getOptions() {
    return this.options;
  }

}