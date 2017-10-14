import { SportifyPage } from './app.po';

describe('sportify App', () => {
  let page: SportifyPage;

  beforeEach(() => {
    page = new SportifyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
