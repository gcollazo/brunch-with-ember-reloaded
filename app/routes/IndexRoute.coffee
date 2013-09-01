App = require 'config/app'

module.exports = App.IndexRoute = Ember.Route.extend
  model: ->
    ['red', 'yellow', 'blue']
