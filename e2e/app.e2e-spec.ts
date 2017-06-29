import { SearchPipeProjectPage } from './app.po';

describe('search-pipe-project App', () => {
  let page: SearchPipeProjectPage;

  beforeEach(() => {
    page = new SearchPipeProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
