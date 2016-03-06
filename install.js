/* 
This file is, together with install.json, the configuration for eager.io,
which allows testing the library on webpages.
It is not necessary for running birdman.js
*/
(function(){
  // First of all, let's load jQuery
  if(typeof(jQuery) == 'undefined') {
    window.jQuery = 'loading';
    var jq = document.createElement('script');
    jq.type = 'text/javascript';
    jq.src = '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js';
    jq.onload = function() {
      // JQuery is loaded...
      console.log('jQuery ' + jQuery.fn.jquery + ' loaded successfully.');
      // Now load the actual script (which requires $)
      $.getScript('https://cdn.rawgit.com/chrisma/birdman.js/v1.0.0/birdman.js')
        .done(function( script, textStatus ) {
          console.log('Birdman.js loaded successfully.');
          console.log(INSTALL_OPTIONS.advanced);
          $(INSTALL_OPTIONS.location).birdman({
            'delay': parseInt(INSTALL_OPTIONS.advanced.delay),
            'speedUp': INSTALL_OPTIONS.speedUp
          });
      })
    };
    jq.onerror = function () {
        delete jQuery;
        console.error('Error while loading jQuery!');
    };
    document.getElementsByTagName('head')[0].appendChild(jq);
  } else {
    if (typeof (jQuery) == 'function') {
        console.log('jQuery (' + jQuery.fn.jquery + ') is already loaded!');
    } else {
        console.log('jQuery is already loading...');
    }
  }
})();