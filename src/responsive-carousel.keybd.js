/*
 * responsive-carousel keyboard extension
 * https://github.com/filamentgroup/responsive-carousel
 *
 * Copyright (c) 2012 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */

(function($) {
	var pluginName = "carousel",
		initSelector = "." + pluginName,
		navSelector = "." + pluginName + "-nav a",
		buffer,
		keyNav = function( e ) {
			clearTimeout( buffer );
			buffer = setTimeout(function() {
				var $carousel = $( e.target ).closest( initSelector );

				( e.keyCode == 39 || e.keyCode == 40 ) && $carousel[ pluginName ]( "next" );
				( e.keyCode == 37 || e.keyCode == 38 ) && $carousel[ pluginName ]( "prev" );
			}, 200 );

			if( 37 <= e.keyCode <= 40 ) {
				e.preventDefault();
			}
		}

	// Touch handling
	$( navSelector )
		.live( "click", function( e ) {
			$( this ).focus();
		})
		.live( "keydown", keyNav );
}(jQuery));
