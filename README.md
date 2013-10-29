# Brunch with Ember Reloaded

A [Brunch](http://brunch.io) skeleton for creating ambitious web applications using [Ember.js](http://emberjs.com). Based on the official Ember [Starter Kit](https://github.com/emberjs/starter-kit/archive/master.zip).

## Demo

I built a demo app using this skeleton, based on the [Building an App with Ember.js](http://www.youtube.com/watch?v=Ga99hMi7wfY) video by [Tom Dale](http://twitter.com/tomdale).

**Demo**: [ember-bloggr](http://dev.gcollazo.com/ember-bloggr)

**Source**: [https://github.com/gcollazo/ember-bloggr](https://github.com/gcollazo/ember-bloggr)

## Versions
- [Ember v1.1.2](http://emberjs.com)
- [Ember Data v1.0.0-beta.3](https://github.com/emberjs/data)
- [Handlebars 1.0.0](http://handlebarsjs.com)
- [jQuery v2.0.3](http://jquery.com)
- [HTML5 Boilerplate v4.2.0](http://html5boilerplate.com)

## Features

- **Ember Data install script** - A data persistence library for Ember.js.
- **CoffeeScript** - a little language that compiles into JavaScript.
- **Stylus** - Expressive, dynamic, robust CSS pre-processor.
- **auto-reload-brunch** - Adds automatic browser reloading support to brunch.
- **uglify-js-brunch** - Adds UglifyJS support to brunch.

## Getting started

Before using brunch-with-ember-reloaded you will need to install [Brunch](http://brunch.io/) and [Bower](http://bower.io/).

```
brunch new gh:gcollazo/brunch-with-ember-reloaded <appname>
cd <appname>
brunch watch -s
```
Open [http://localhost:3333](http://localhost:3333) on your browser.

## Generators

This skeleton makes use of [scaffolt](https://github.com/paulmillr/scaffolt#readme) generators to help you create common files quicker. To use first install scaffolt globally with `npm install -g scaffolt`. Then you can use the following command to generate files.

```
scaffolt model <name>             →    app/models/Name.coffee
scaffolt view <name>              →    app/views/NameView.coffee
scaffolt controller <name>        →    app/controllers/NameController.coffee
scaffolt arraycontroller <name>	  →    app/controllers/NamesController.coffee
scaffolt route <name>             →    app/routes/NameRoute.coffee
scaffolt template <name>          →    app/templatesname.hbs
scaffolt component <name>         →    app/components/NameComponent.coffee
                                       app/templates/components/name.hbs
```

There are more commands you can do with scaffolt and also instruction on how to create your own generators, so make sure you check out the [docs](https://github.com/paulmillr/scaffolt#readme).

## Testing

To run you will need [Karma](https://github.com/karma-runner) you will need to install [phantomjs](https://github.com/ariya/phantomjs). If you want to run your tests on other browsers consult the Karma docs.

```
brew update && brew install phantomjs
```

To run tests continiously as you write code and tests (for now) you must open two terminal windows.

```
brunch watch -s
```

```
karma start
```

## License

All of brunch-with-ember-reloaded is licensed under the MIT license.

Copyright (c) 2013 Giovanni Collazo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
