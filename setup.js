'use strict';

var exec = require('child_process').exec,
    sysPath = require('path'),
    fs = require('fs'),
    mode = process.argv[2],
    fsExistsSync = fs.existsSync || sysPath.existsSync,
    emberUrls = {
      common: [
        'http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-latest.js'
      ],
      development: [
        'http://builds.emberjs.com/release/ember.js',
        'http://builds.emberjs.com.s3.amazonaws.com/ember-data-latest.js'
      ],
      production: [
        'http://builds.emberjs.com/release/ember.prod.js',
        'http://builds.emberjs.com.s3.amazonaws.com/ember-data-latest.prod.js'
      ]
    },
    skeletonUrls = [
      'https://raw.github.com/gcollazo/brunch-with-ember-reloaded/master/package.json',
      'https://raw.github.com/gcollazo/brunch-with-ember-reloaded/master/README.md',
      'https://raw.github.com/gcollazo/brunch-with-ember-reloaded/master/config.js',
      'https://raw.github.com/gcollazo/brunch-with-ember-reloaded/master/karma.conf.js'
    ];

var getBinaryPath = function(binary) {
  var path;
  if (fsExistsSync(
      path = sysPath.join('node_modules', '.bin', binary))) return path;
  if (fsExistsSync(path = sysPath.join('..', '.bin', binary))) return path;
  return binary;
};

var execute = function(path, params, callback) {
  if (callback == null) callback = function() {};
  var command = path + ' ' + params;
  console.log('Executing', command);
  exec(command, function(error, stdout, stderr) {
    if (error != null) return process.stderr.write(stderr.toString());
    console.log(stdout.toString());
  });
};

switch (mode) {
  case 'emberupdate':
    for (var env in emberUrls) {
      for (var file in emberUrls[env]) {
        var download = emberUrls[env][file],
            filename = download.split('/').reverse()[0]
                       .replace('.prod', '').replace('-latest', '');

        execute('curl ' + emberUrls[env][file],
                ' > vendor/scripts/' + env + '/' + filename);
      }
    }
    break;

  case 'updateskeleton':
    for (var url in skeletonUrls) {
      console.log(skeletonUrls[url]);
      var filename = skeletonUrls[url].split('/').reverse()[0];
      execute('curl ' + skeletonUrls[url], '> ' + filename);
    }
    break;
}
