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
brunch watch -s
```
Then open [http://localhost:3333](http://localhost:3333) on your browser.

### Get ember-data
There's a little cake task to download the latest ember-data.js and copy it to your `vendor/scripts` directory. To build ember-data.js the script will run `bundle` and `rake` on the cloned repository, so you need to have that installed on your system.

```
cake getemberdata
```
When the script finishes just add `'vendor/scripts/ember-data.js'` to your `config.coffee` file just under `'vendor/scripts/ember-*.js'`.

## License
All of brunch-with-ember-reloaded is licensed under the MIT license.

Copyright (c) 2013 Giovanni Collazo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
