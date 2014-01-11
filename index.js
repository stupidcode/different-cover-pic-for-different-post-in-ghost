/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // set background image of post header
	  var $postImage = $('#cover-img');
	  if ( $postImage.length ) {
	    var postImageURL = $postImage.attr('src');
	    $('header#site-head').css('background-image','url(' + postImageURL + ')');
	  }
  	$postImage.remove();

    });

}(jQuery));
