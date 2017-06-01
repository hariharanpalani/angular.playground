import { CustomComponentsPage } from './app.po';

describe('custom-components App', () => {
  let page: CustomComponentsPage;

  beforeEach(() => {
    page = new CustomComponentsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
