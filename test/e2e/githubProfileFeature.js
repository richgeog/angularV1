describe('GitHub profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'))
  var searchButton = element(by.className('btn'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function() {
    searchBox.sendKeys('spike01');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.get(0).getText()).toEqual('spike01');
  });

  // it('finds the last Spike', function() {
  //   searchBox.sendKeys('spike');
  //   searchButton.click();
  //   var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
  //   expect(profiles.last().getText()).toContain('spike');
  // });

  it('finds how many spikes', function() {
    searchBox.sendKeys('spike');
    searchButton.click();
    var number = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(number.count()).toEqual(30);
  });

});