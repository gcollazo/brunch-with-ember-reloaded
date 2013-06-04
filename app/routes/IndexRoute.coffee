App = require 'app'

module.exports = App.IndexRoute = Ember.Route.extend
  model: ->
    ['red', 'yellow', 'blue']
