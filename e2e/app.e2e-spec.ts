import { Material2ZooplaPage } from './app.po';

describe('material2-zoopla App', function() {
  let page: Material2ZooplaPage;

  beforeEach(() => {
    page = new Material2ZooplaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
