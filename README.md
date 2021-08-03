# birdman.js
A JQuery plugin to animate text as in the credits of the 2014 movie "Birdman".<br>
See it in action at [chrisma.github.io/birdman.js](http://chrisma.github.io/birdman.js/)

![Gif of original animation](https://web.archive.org/web/20170221001046if_/http://hackedofffilms.com/wp-content/uploads/2015/01/birdman-typo-3.gif)

I'm aware that Birdman was [not the first movie](https://web.archive.org/web/20150404095221/http://hackedofffilms.com/typecast-birdmans-typography/) to use this effect, but the name is so nice.

Demos for `'words'` and `'lines'` methods are [here](https://jsfiddle.net/1bLo8bc0/).

# Setup
* Include JQuery (if you haven't already)
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
```
* Download the [birdman.js](https://raw.githubusercontent.com/chrisma/birdman.js/gh-pages/birdman.js) file and serve it locally *OR* load it from a CDN:
```html
<!-- Local -->
<script src="birdman.js"></script>
<!-- or CDN -->
<script src="https://cdn.rawgit.com/chrisma/birdman.js/gh-pages/birdman.js"></script>
```

* Initialize the plugin on the content you want birdmanned. This works with any styling.
```javascript
$('.birdman').birdman();
```

# Configuration
The `birdman` function takes an object with configuration options. Supported are:
* `method`: The method used to split the text. **Default** is `'letters'`. Other options are `'words'` and `'lines'`.
* `order`: An array deciding the order in which parts are animated, e.g. `['a','b','c',...]`, if more than one part is supposed to be animated at the same time, put them in a separate array, e.g. `[['a','A'],['b','B'],...]`. **Default** is case insensitive alphabetical order (for the `'letters'` method). For `'words'` and `'lines'` there is no default and this must be set for birdman.js to work.
* `delay`: The amount of milliseconds between each animation. **Default** is `150`.
* `speedUp`: Boolean indicating whether the animation should become faster towards the end. **Default** is `false`.
