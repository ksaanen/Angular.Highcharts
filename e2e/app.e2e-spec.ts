import { Angular.CharjsPage } from './app.po';

describe('angular.charjs App', () => {
  let page: Angular.CharjsPage;

  beforeEach(() => {
    page = new Angular.CharjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
