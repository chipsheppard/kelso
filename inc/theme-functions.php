<?php
/**
 * Theme Functions.
 *
 * @package kelso
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Dont Update the Theme
 *
 * If there is a theme in the repo with the same name, this prevents WP from prompting an update.
 *
 * @since  1.0.0
 * @author Bill Erickson
 * @link   http://www.billerickson.net/excluding-theme-from-updates
 * @param  array  $r Existing request arguments.
 * @param  string $url Request URL.
 * @return array Amended request arguments
 */
function kelso_dont_update_theme( $r, $url ) {
	if ( 0 !== strpos( $url, 'https://api.wordpress.org/themes/update-check/1.1/' ) ) {
		return $r; // Not a theme update request. Bail immediately.
	}
	$themes = json_decode( $r['body']['themes'] );
	$child = get_option( 'stylesheet' );
	unset( $themes->themes->$child );
	$r['body']['themes'] = wp_json_encode( $themes );
	return $r;
}
add_filter( 'http_request_args', 'kelso_dont_update_theme', 5, 2 );


/**
 * ARCHIVE TITLE
 * puts a span around "Category:, Tag:, etc...
 *
 * @param string $title The title.
 */
function wrap_archive_title_part( $title ) {
	if ( is_category() ) {
		$title = single_cat_title( '', false );
	} elseif ( is_tag() ) {
		$title = single_tag_title( '', false );
	} elseif ( is_author() ) {
		$title = __( '<div>written by:</div><span class="vcard">', 'kelso' ) . get_the_author() . '</span>';
	} elseif ( is_year() ) {
		$title = __( '<div>archive by year:</div>', 'kelso' ) . get_the_date( 'Y' );
	} elseif ( is_month() ) {
		$title = __( '<div>archive by month:</div>', 'kelso' ) . get_the_date( 'F Y' );
	} elseif ( is_day() ) {
		$title = __( '<div>archive by day:</div>', 'kelso' ) . get_the_date( 'F j, Y' );
	} elseif ( is_post_type_archive() ) {
		$title = post_type_archive_title( '', false );
	} elseif ( is_tax() ) {
		$title = single_term_title( '', false );
	} elseif ( is_home() ) {
		$title = get_the_title( get_option( 'page_for_posts', true ) );
	} else {
		$title = __( 'Archives', 'kelso' );
	}
	return $title;
}
add_filter( 'get_the_archive_title', 'wrap_archive_title_part' );


/**
 * Change Text in Search Submit Button
 *
 * @param string $text string of text.
 * @link https://wordpress.org/support/topic/how-do-i-change-some-details-of-the-search-widget
 */
function kelso_search_button( $text ) {
	$text = str_replace( 'value="Search"', 'value="go"', $text );
	return $text;
}
add_filter( 'get_search_form', 'kelso_search_button' );



/**
 * EXCERPT LENGTH FILTER - to 16 words.
 *
 * @param int $length Excerpt length.
 * @return int modified excerpt length.
 */
function kelso_custom_excerpt_length( $length ) {
	if ( has_post_format( 'aside' ) || has_post_format( 'status' ) ) :
		return 48;
	elseif ( is_search() ) :
		return 32;
	else :
		return 16;
	endif;
}
add_filter( 'excerpt_length', 'kelso_custom_excerpt_length', 999 );


/**
 * Makes the Read More link on Archive templates.
 */
function kelso_read_more() {
	$link = sprintf( '<footer class="link-more"><a href="%1$s" class="more-link arrow">%2$s</a></footer>',
		get_permalink( get_the_ID() ),
		/* translators: %s: Name of current post */
		sprintf( __( 'Full Article<span class="screen-reader-text"> "%s"</span>', 'kelso' ), get_the_title( get_the_ID() ) )
	);
	echo wp_kses_post( $link );
}


/**
 * Adds custom classes to the array of body classes.
 *
 * @param Array $classes the array of body classes.
 * @return array
 */
function kelso_body_classes( $classes ) {

	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	return $classes;
}
add_filter( 'body_class', 'kelso_body_classes' );

/**
 * Add a pingback url auto-discovery header for singularly identifiable articles.
 */
function kelso_pingback_header() {
	if ( is_singular() && pings_open() ) {
		echo '<link rel="pingback" href="', bloginfo( 'pingback_url' ), '">';
	}
}
add_action( 'wp_head', 'kelso_pingback_header' );

/**
 * Remove injected styles from recent comments widget.
 *
 * @link http://www.narga.net/how-to-remove-or-disable-comment-reply-js-and-recentcomments-from-wordpress-header
 */
function kelso_remove_recent_comments_style() {
	global $wp_widget_factory;
	remove_action( 'wp_head', array( $wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style' ) );
}
add_action( 'widgets_init', 'kelso_remove_recent_comments_style' );