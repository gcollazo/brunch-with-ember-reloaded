# brunch-with-ember-reloaded
A new and up-to-date [Brunch](http://brunch.io) skeleton for developing [Ember](http://emberjs.com) applications based on the official Ember [Starter Kit](https://github.com/emberjs/starter-kit/archive/master.zip).

## Demo
I built a demo app using this skeleton, based on the [Building an App with Ember.js](http://www.youtube.com/watch?v=Ga99hMi7wfY) video by [Tom Dale](http://twitter.com/tomdale).

**Demo**: [ember-bloggr](http://dev.gcollazo.com/ember-bloggr)
**Source**: [https://github.com/gcollazo/ember-bloggr](https://github.com/gcollazo/ember-bloggr)

## Versions
- [Ember v1.0.0-rc.3](http://emberjs.com)
- [Handlebars 1.0.0-rc.3](http://handlebarsjs.com)
- [jQuery v1.9.1](http://jquery.com)
- [HTML5 Boilerplate v4.2.0](http://html5boilerplate.com)

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

### Ember Data
There's a little cake task to download the Ember Data from [builds.emberjs.com](http://builds.emberjs.com) and copy it to your `vendor/scripts` directory.

```
cake getemberdata
```
When the script finishes just add `'vendor/scripts/ember-data-latest.js'` to your `config.coffee` file just under `'vendor/scripts/ember-*.js'`.

### Generators
This skeleton makes use of [scaffolt](https://github.com/paulmillr/scaffolt#readme) generators to help you create common files quicker. To use first install skaffolt globally with `npm install -g scaffolt`. Then you can use the following command to generate files.

```
skaffolt model <name> 				→ app/models/			Name.coffee
skaffolt view <name>				→ app/views/			NameView.coffee
skaffolt controller <name> 			→ app/controllers/	NameController.coffee
skaffolt arraycontroller <name>		→ app/controllers/	NamesController.coffee
skaffolt route <name> 				→ app/routes/			NameRoute.coffee
skaffolt template <name> 			→ app/templates		name.hbs
```
There's a few more commands you can use with scaffolt and also instruction on how to create your own generators, so make sure you check out the [docs](https://github.com/paulmillr/scaffolt#readme).

### Testing
You can write your tests in the `test` folder, just make sure they are named `*_test.coffee`. You can customize the test to user PhantomJS, Chrome, Firefox, Safari or Opera on the `test/karma.conf.js` file. There's a lot of other settings there as well. Run tests with:

```
cake test
```


## License
All of brunch-with-ember-reloaded is licensed under the MIT license.

Copyright (c) 2013 Giovanni Collazo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
