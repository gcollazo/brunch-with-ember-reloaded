require('initialize');

document.write('<div id="ember-testing"></div>');
App.rootElement = '#ember-testing';
App.setupForTesting();
App.injectTestHelpers();

module('Integration tests', {
    setup: function() {
        Ember.run(App, App.advanceReadiness);
    },

    teardown: function() {
        App.reset();
    }
});
