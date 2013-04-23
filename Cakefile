http = require 'http'
fs = require 'fs'


# Test runner
task 'test', ->
    server = (require 'karma').server
    server.start configFile: './test/karma.conf.js', (exitCode) ->
      console.log "Karma has exited with #{exitCode}"
      process.exit exitCode


# Gets latest Ember Data
task 'getemberdata', 'download latest build of Ember Data', (options) ->
    file = fs.createWriteStream 'vendor/scripts/ember-data-latest.js'
    request = http.get 'http://builds.emberjs.com.s3.amazonaws.com/ember-data-latest.js', (response) ->
        response.pipe file

# Get latest Ember
task 'getember', 'download and build the latest ember-data.js', (options) ->
    file = fs.createWriteStream 'vendor/scripts/ember-latest.js'
    request = http.get 'http://builds.emberjs.com.s3.amazonaws.com/ember-latest.js', (response) ->
        response.pipe file
