# brunch-with-ember-reloaded
A new and up-to-date [Brunch](http://brunch.io) skeleton for developing [Ember](http://emberjs.com) applications based on the official Ember [Starter Kit](https://github.com/emberjs/starter-kit/archive/master.zip).

## Versions
- [Ember v1.0.0-rc.1](http://emberjs.com)
- [Handlebars 1.0.0-rc.3](http://handlebarsjs.com)
- [jQuery v1.9.1](http://jquery.com)
- [HTML5 Boilerplate v4.1.0](http://html5boilerplate.com)
- [Swag v0.2.6](https://github.com/elving/swag)

## Features
- **CoffeeScript** - a little language that compiles into JavaScript.
- **Stylus** - Expressive, dynamic, robust CSS pre-processor.
- **auto-reload-brunch** - Adds automatic browser reloading support to brunch.
- **uglify-js-brunch** - Adds UglifyJS support to brunch.

## Getting started

```
brunch new <appname> --skeleton git@github.com:gcollazo/brunch-with-ember-reloaded.git
cd <appname>
brunch watch -s
```
Open [http://localhost:3333](http://localhost:3333) on your browser.

### ember-data.js
There's a little cake task to download the latest ember-data.js and copy it to your `vendor/scripts` directory. To build ember-data.js the script will run `bundle` and `rake` on the cloned repository, so you need to have that installed on your system.

```
cake getemberdata
```
When the script finishes just add `'vendor/scripts/ember-data.js'` to your `config.coffee` file just under `'vendor/scripts/ember-*.js'`.

### Generators
This skeleton makes use of Brunch [generators](https://github.com/brunch/brunch/blob/master/docs/commands.md#brunch-generate) to help you create common files quicker.

```
brunch g model <name> 				→ app/models/			Name.coffee
brunch g view <name>				→ app/views/			NameView.coffee
brunch g controller <name> 			→ app/controllers/	NameController.coffee
brunch g arraycontroller <name>		→ app/controllers/	NamesController.coffee
brunch g route <name> 				→ app/routes/			NameRoute.coffee
brunch g template <name> 			→ app/templates		name.hbs
```

### Testing
You can write your tests in the `test` folder. The skeleton puts a sample test case on `test/sample-tests/array-test.coffee`. To run see your tests just:

```
brunch watch -s
```

Open [http://localhost:3333/test/](http://localhost:3333/test/) on your browser.

## File structure
```
├── Cakefile
├── LICENSE
├── README.md
├── app
│   ├── app.coffee
│   ├── assets
│   │   ├── 404.html
│   │   ├── apple-touch-icon-114x114-precomposed.png
│   │   ├── apple-touch-icon-144x144-precomposed.png
│   │   ├── apple-touch-icon-57x57-precomposed.png
│   │   ├── apple-touch-icon-72x72-precomposed.png
│   │   ├── apple-touch-icon-precomposed.png
│   │   ├── apple-touch-icon.png
│   │   ├── crossdomain.xml
│   │   ├── favicon.ico
│   │   ├── humans.txt
│   │   ├── img
│   │   │   ├── glyphicons-halflings-white.png
│   │   │   └── glyphicons-halflings.png
│   │   ├── index.html
│   │   ├── javascripts
│   │   │   └── modernizr-2.6.2.min.js
│   │   └── robots.txt
│   ├── controllers
│   ├── helpers
│   ├── initialize.coffee
│   ├── models
│   ├── routes
│   ├── styles
│   │   └── application.styl
│   ├── templates
│   │   ├── application.hbs
│   │   └── index.hbs
│   └── views
├── config.coffee
├── generators
│   ├── arraycontroller
│   │   ├── arraycontroller.coffee.hbs
│   │   └── generator.json
│   ├── controller
│   │   ├── controller.coffee.hbs
│   │   └── generator.json
│   ├── model
│   │   ├── generator.json
│   │   └── model.coffee.hbs
│   ├── route
│   │   ├── generator.json
│   │   └── route.coffee.hbs
│   ├── template
│   │   ├── generator.json
│   │   └── template.hbs.hbs
│   └── view
│       ├── generator.json
│       └── view.coffee.hbs
├── package.json
├── test
│   ├── assets
│   │   └── test
│   │       └── index.html
│   ├── sample-tests
│   │   └── array-test.coffee
│   ├── test-helpers.coffee
│   └── vendor
│       ├── scripts
│       │   ├── chai-1.4.0.js
│       │   ├── mocha-1.7.3.js
│       │   ├── sinon-1.5.2.js
│       │   ├── sinon-chai-2.2.0.js
│       │   └── test-helper.js
│       └── styles
│           └── mocha-1.7.2.css
└── vendor
    ├── scripts
    │   ├── console-polyfill.js
    │   ├── ember-1.0.0-rc.1.js
    │   ├── handlebars-1.0.rc.3.js
    │   ├── jquery-1.9.1.js
    │   └── swag.js
    └── styles
        └── normalize.css
```

## License
All of brunch-with-ember-reloaded is licensed under the MIT license.

Copyright (c) 2013 Giovanni Collazo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
