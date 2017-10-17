import { Angular.HighchartsPage } from './app.po';

describe('angular.highcharts App', () => {
  let page: Angular.HighchartsPage;

  beforeEach(() => {
    page = new Angular.HighchartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
