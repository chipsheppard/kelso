<?php
/**
 * The Sidebar.
 *
 * @package  osixthreeo
 * @author   Chip Sheppard
 * @since    1.0.0
 * @license  GPL-2.0+
 */

if ( ! is_active_sidebar( 'sidebar' ) ) {
	return;
}

tha_sidebars_before();
echo '<aside id="secondary" class="widget-area" role="complementary">';
tha_sidebar_top();
if ( OSIXTHREEO_PRO ) :
	if ( OSIXTHREEO_WOOCOMMERCE_ACTIVE ) :
		if ( is_woocommerce() || is_cart() || is_checkout() || is_account_page() ) :
			dynamic_sidebar( 'sidebar-w' );
		elseif ( is_page() ) :
			dynamic_sidebar( 'sidebar-p' );
		else :
			dynamic_sidebar( 'sidebar' );
		endif;
	elseif ( is_page() ) :
			dynamic_sidebar( 'sidebar-p' );
	else :
		dynamic_sidebar( 'sidebar' );
	endif;
else :
	dynamic_sidebar( 'sidebar' );
endif;
tha_sidebar_bottom();
echo '</aside>';
tha_sidebars_after();
