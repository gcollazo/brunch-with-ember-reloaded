require 'initialize' ;

document.write '<div id="ember-testing"></div>'
App.rootElement = '#ember-testing'
App.setupForTesting()
App.injectTestHelpers()

module 'Integration tests',
    setup: ->
        Ember.run App, App.advanceReadiness

    teardown: ->
        App.reset()
