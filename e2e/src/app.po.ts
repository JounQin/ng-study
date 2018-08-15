import { browser, by, element } from 'protractor'

export class AppPage {
  navigateTo() {
    browser.waitForAngularEnabled(false)
    return browser.get('/')
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText()
  }
}
