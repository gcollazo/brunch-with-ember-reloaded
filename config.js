exports.config = {
  files: {
    javascripts: {
      joinTo: {
        'javascripts/app.js': /^app/,
        'javascripts/vendor.js': /^vendor/
      },
      order: {
        before: [
          'vendor/scripts/console-polyfill.js',
          'vendor/scripts/jquery.js',
          'vendor/scripts/handlebars.js',
          'vendor/scripts/ember.js', 'vendor/scripts/ember-data.js'
        ]
      }
    },
    stylesheets: {
      joinTo: {
        'stylesheets/app.css': /^(app|vendor)/
      },
      order: {
        before: ['vendor/styles/normalize.css']
      }
    },
    templates: {
      precompile: true,
      root: 'templates',
      joinTo: {
        'javascripts/app.js': /^app/
      }
    }
  },
  overrides: {
    production: {
      optimize: true,
      sourceMaps: false,
      plugins: {
        autoReload: {
          enabled: false
        }
      }
    }
  }
};
