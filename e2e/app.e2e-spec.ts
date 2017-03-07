import { TrimNg2StarterPage } from './app.po';

describe('trim-ng2-starter App', () => {
  let page: TrimNg2StarterPage;

  beforeEach(() => {
    page = new TrimNg2StarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
