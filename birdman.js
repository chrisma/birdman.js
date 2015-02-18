/*
* Lettering.JS 0.6.1 by Dave Rupert (https://github.com/davatron5000/Lettering.js)
* Released under the WTFPL license (http://sam.zoy.org/wtfpl)
* Modified by Christoph Matthies
*/
(function($){
  
	function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter), inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				escapedItem = escape(item);
				inject += '<span class="lettering '+klass+(i+1)+'" data-'+klass+'="'+escapedItem+'">'+item+'</span>'+after;
			});	
			t.empty().append(inject);
		}
	}

	function escape(str) {
		// avoids double encoding &amp; See comments from http://css-tricks.com/snippets/javascript/htmlentities-for-javascript/
		return String(str).replace(/&amp;/g, '&').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	}

	var methods = {
		init : function() {
			return this.each(function() {
				injector($(this), '', 'letters', '');
			});
		},

		words : function() {
			return this.each(function() {
				injector($(this), ' ', 'words', ' ');
			});
		},
		
		lines : function() {
			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash 
				// (of the word "split").  If you're trying to use this plugin on that 
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'lines', '');
			});
		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic, "this" is the collection of DOM elements the function was called on.
		if ( method && methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 0 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, Array.prototype.slice.call( arguments, 0 ) );
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};

})(jQuery);


/*
* Birdman.js 0.1 by Christoph Matthies (https://github.com/chrisma/birdman.js)
*/
(function($){

	$.fn.birdman = function(params) {
		/* Argument Check */
		if (arguments.length > 1) {
			$.error( 'Please pass in arguments as a single object.' );
			return this;
		}

		/* Default Parameters */
		if ( !params ) params = {};
		params.method = defaultFor(params.method, 'letters');
		var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var capitalAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		var specialChars = ['-','+','*','_','~','<','>','|','.','?','!', '§','$','%','&','/','(',')','[',']','{','}','='];
		var combinedAlphabet = zip(alphabet, capitalAlphabet).concat([specialChars]);
		params.order = defaultFor(params.order, combinedAlphabet);
		params.delay = defaultFor(params.delay, 200);

		/* Setup */
		$(this).lettering(params.method);
		$(this).children('span.lettering').css('visibility','hidden');

		/* Main */
		i = 0;
		that = $(this);
		params.order.forEach(function(element, index, array){
			var $result = $([]);
			if ( typeof element === 'string' ){
				element = Array(element);
			}
			element.forEach(function(part, index, array){
				var $span = that.children('span.lettering[data-'+ params.method +'="'+ part +'"]');
				$result = $result.add($span);
			});
			if ( $result.length>0 ) {
				i += 1;
				setTimeout(show.bind(undefined, $result), params.delay*i);
			}
		})

		function show($array) {
			//Jquery's fadeIn() changes the display property, not the visibility
			$array.css('visibility','visible').hide().fadeIn();
		}

		/* Utility functions */
		function defaultFor(arg, val) {
			return typeof arg !== 'undefined' ? arg : val;
		}

		function zip() {
			var args = [].slice.call(arguments);
			var shortest = args.length==0 ? [] : args.reduce(function(a,b){
				return a.length<b.length ? a : b
			});
			return shortest.map(function(_,i){
				return args.map(function(array){return array[i]})
			});
		}
	};

})(jQuery);