'use strict';

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get('/demo/todo-list/');
    page = {};
  });

  it('should add checkbox', function() {
    page.text = element(by.id('input'));
    page.button = element(by.id('add-button'));
    page.text.sendKeys('write first protractor test');
    page.button.click();
    page.text.sendKeys('write second protractor test');
    page.button.click();
    var todoList = element.all(by.repeater('item in list'));
    expect(todoList.count()).to.eventually.equal(2);
  });
});
