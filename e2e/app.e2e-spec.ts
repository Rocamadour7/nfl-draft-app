import { NflDraftPage } from './app.po';

describe('nfl-draft App', () => {
  let page: NflDraftPage;

  beforeEach(() => {
    page = new NflDraftPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('nfl works!');
  });
});
