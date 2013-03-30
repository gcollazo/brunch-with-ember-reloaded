App = require 'app'

App.IndexRoute = Em.Route.extend
    model: ->
        ['red', 'yellow', 'blue']
