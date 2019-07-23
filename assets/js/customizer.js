/**
 * Customizer JS
 *
 * @package  osixthreeo
 * @subpackage osixthreeo/assets/js
 * @author   Chip Sheppard
 * @since    1.0.0
 * @license  GPL-2.0+
 */

( function( $ ) {
	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );

	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-title, .site-description' ).css( {
					'clip': 'rect(1px, 1px, 1px, 1px)',
					'position': 'absolute'
				} );
			} else {
				$( '.site-title, .site-description' ).css( {
					'clip': 'auto',
					'position': 'relative'
				} );
				$( '.site-title a, .site-description' ).css( {
					'color': to
				} );
			}
		} );
	} );

	// GLOBAL WIDTH.
	wp.customize( 'osixthreeo_settings[global_width_setting]', function( value ) {
		value.bind( function( newval ) {
			if ( 'full' === newval ) {
				$( 'body' ).removeClass( 'contained' );
			}
			if ( 'contained' === newval ) {
				$( 'body' ).addClass( 'contained' );
			}
		} );
	} );

	// HEADER LAYOUT.
	wp.customize( 'osixthreeo_settings[header_layout]', function( value ) {
		value.bind( function( newval ) {
			if ( 'headernormal' === newval ) {
				$( 'body' ).removeClass( 'headercentered' );
			}
			if ( 'headercentered' === newval ) {
				$( 'body' ).addClass( 'headercentered' );
			}
		} );
	} );

	// CONTAIN CONTENT.
	wp.customize( 'osixthreeo_settings[content_contain]', function( value ) {
		value.bind( function( newval ) {
			if ( newval ) {
				$( 'body' ).addClass( 'contentcontained' );
			} else {
				$( 'body' ).removeClass( 'contentcontained' );
			}
		} );
	} );

} )( jQuery );
