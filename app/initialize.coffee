# ===== Namespace =====
App = require 'app'


# ===== Templates =====
require 'templates/application'
require 'templates/index'


# ===== Models =====


# ===== Controllers =====


# ===== Views =====


# ===== Handlebars Helpers =====


# ===== Routes =====


# ===== Router =====
App.IndexRoute = Ember.Route.extend
    setupController: (controller) ->
        controller.set 'content', ['red', 'yellow', 'blue']
