import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable()
export class HighchartsService {
  private chartObject: Highcharts.ChartObject;
  private options: Highcharts.Options = {};
  private series: Object[] = [];

  initChart(ctx: string) {
    if (this.chartObject) {
      this.chartObject.redraw();
    }
    this.chartObject = new Highcharts.Chart(ctx, this.getOptions());
  }

  xAxis(xAxe: Highcharts.AxisOptions, _xAxisBreak?: Highcharts.AxisBreak, _xAxisTitle?: Highcharts.AxisTitle) {
    this.options.xAxis = xAxe;
    if (_xAxisBreak) {
      this.options.xAxis.breaks = [_xAxisBreak];
    }
    if (_xAxisTitle) {
      this.options.xAxis.title = _xAxisTitle;
    }
    this.updateChart();
  }

  yAxis(yAxe: Highcharts.AxisOptions, _yAxisBreak?: Highcharts.AxisBreak, _yAxisTitle?: Highcharts.AxisTitle) {
    this.options.yAxis = yAxe;
    if (_yAxisBreak) {
      this.options.yAxis.breaks = [_yAxisBreak];
    }
    if (_yAxisTitle) {
      this.options.yAxis.title = _yAxisTitle;
    }
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

  set config(value: Highcharts.Options) {
    Object.assign(this.options, value);
  }

  set title(value: Highcharts.TitleOptions) {
    this.options.title = value;
    this.updateChart();
  }

  updateChart() {
    if (this.chartObject) {
      this.chartObject.redraw();
    }
  }

  getOptions() {
    return this.options;
  }

}
