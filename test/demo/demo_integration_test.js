test('welcome message present', function() {
  App.reset();
  visit('/').then(function() {
    ok(find('h2:contains("Welcome to Ember")').length);
  });
});

test('list items present', function() {
  App.reset();
  visit('/').then(function() {
    var listItems = find('li').length;
    equal(3, listItems, "found instead " + listItems);
  });
});
