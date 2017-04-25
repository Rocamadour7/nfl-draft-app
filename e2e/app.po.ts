import { browser, element, by } from 'protractor';

export class NflDraftPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nfl-root h1')).getText();
  }
}
