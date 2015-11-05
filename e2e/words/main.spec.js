'use strict';

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get('/demo/words/');
    page = {};
  });

  it('should count words and chars', function() {
    page.text = element(by.id('input'));
    console.log(page.text);
    page.text.sendKeys('write first protractor test');
    expect(element(by.binding('text.length'))).to.eventually.equal(26);
  });
});
