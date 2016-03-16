/*
This file is, together with install.json, the configuration for eager.io,
which allows testing the library on webpages.
It is not necessary for running birdman.js
*/

window.EagerBirdman = function(options){
  jQuery(options.location).birdman({
    'delay': parseInt(options.advanced.delay),
    'speedUp': options.speedUp
  });
}
