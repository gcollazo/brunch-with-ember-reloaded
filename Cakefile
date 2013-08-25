http = require 'http'
fs = require 'fs'

# Gets latest Ember Data
task 'getemberdata', 'download latest build of Ember Data', (options) ->
  file = fs.createWriteStream 'vendor/scripts/ember-data-latest.js'
  request = http.get 'http://builds.emberjs.com.s3.amazonaws.com/ember-data-latest.js', (response) ->
    response.pipe file
