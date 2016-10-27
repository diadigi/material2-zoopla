import { Material2DashboardPage } from './app.po';

describe('material2-dashboard App', function() {
  let page: Material2DashboardPage;

  beforeEach(() => {
    page = new Material2DashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
