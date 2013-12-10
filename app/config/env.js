'use strict';

module.exports = (function() {
  var envObject = {};
  var moduleNames = window.require.list().filter(function(module) {
    return new RegExp('^envs/').test(module);
  });

  moduleNames.forEach(function(module) {
    var key = module.split('/').reverse()[0];
    envObject[key] = require(module);
  });

  return envObject;
}());
