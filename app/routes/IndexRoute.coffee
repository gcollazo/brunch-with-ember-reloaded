App = require 'app'

module.exports = App.IndexRoute = Em.Route.extend
  model: ->
    ['red', 'yellow', 'blue']
