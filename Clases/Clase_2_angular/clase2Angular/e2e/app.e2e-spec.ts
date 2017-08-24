import { Clase2AngularPage } from './app.po';

describe('clase2-angular App', function() {
  let page: Clase2AngularPage;

  beforeEach(() => {
    page = new Clase2AngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
