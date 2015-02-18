# birdman.js
Jquery plugin to animate text as in the credits of the 2014 movie "Birdman".<br>
See it in action at [chrisma.github.io/birdman.js](http://chrisma.github.io/birdman.js/)

![asdf](http://hackedofffilms.com/wp-content/uploads/2015/01/birdman-typo-3.gif)

And yes, I'm aware that Birdman was [not the first movie](http://hackedofffilms.com/typecast-birdmans-typography/) to use this effect, but the name is so nice.

# Setup
* Include JQuery
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
```
* Download the [birdman.js](https://raw.githubusercontent.com/chrisma/birdman.js/gh-pages/birdman.js) file and include it
```html
<script src="birdman.js"></script>
```
* Initialize the plugin on the content you want birdmanned. This works with any styling.
```javascript
$('.birdman').birdman();
```

# Configuration
The `birdman` function takes an object with configuration options. Supported are:
* `method`: The method used to split the text. **Default** is `'letters'`. Other options are `'words'` and `'lines'`.
* `order`: An array deciding the order in which parts are animated, e.g. `['a','b','c',...]`, if more than one part is supposed to be animated at the same time, put them in a separate array, e.g. `[['a','A'],['b','B'],...]`. **Default** is case insensitive alphabetical order.
* `delay`: The amount of milliseconds between each animation. **Dafault** is `150`.
* `speedUp`: Boolean indicating whether the animation should become faster towards the end. **Default** is `false`.