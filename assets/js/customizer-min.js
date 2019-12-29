/**
 * Customizer JS
 *
 * @package    osixthreeo
 * @subpackage osixthreeo/assets/js
 * @author     Chip Sheppard
 * @since      1.0.0
 * @license    GPL-2.0+
 */
function osixthreeo_colors_live_update(e,t,i,o){o=void 0!==o?o:"initial",wp.customize("osixthreeo_settings["+e+"]",(function(n){n.bind((function(n){n=""!==n?n:o,jQuery("style#"+e).length?jQuery("style#"+e).html(t+"{"+i+":"+n+";}"):(jQuery("head").append('<style id="'+e+'">'+t+"{"+i+":"+n+"}</style>"),setTimeout((function(){jQuery("style#"+e).not(":last").remove()}),1e3))}))}))}!function(e){wp.customize("blogname",(function(t){t.bind((function(t){e(".site-title a").text(t)}))})),wp.customize("blogdescription",(function(t){t.bind((function(t){e(".site-description").text(t)}))})),wp.customize("header_textcolor",(function(t){t.bind((function(t){"blank"===t?e(".site-title, .site-description").css({clip:"rect(1px, 1px, 1px, 1px)",position:"absolute"}):(e(".site-title, .site-description").css({clip:"auto",position:"relative"}),e(".site-title, .site-title a, .site-description").css({color:t}))}))})),wp.customize("osixthreeo_settings[containment_setting]",(function(t){t.bind((function(t){"full"===t&&e("body").removeClass("contained"),"contained"===t&&e("body").addClass("contained")}))})),wp.customize("osixthreeo_settings[max_width]",(function(t){t.bind((function(t){e(".inner-wrap, .content-inner-wrap").css("max-width",t+"px")}))})),wp.customize("osixthreeo_settings[header_layout]",(function(t){t.bind((function(t){"headernormal"===t&&e("body").removeClass("headercentered"),"headercentered"===t&&e("body").addClass("headercentered")}))})),wp.customize("osixthreeo_settings[header_padding]",(function(t){t.bind((function(t){e(".header-wrap").css("padding-top",t+"px"),e(".header-wrap").css("padding-bottom",t+"px")}))})),wp.customize("osixthreeo_settings[home_header_fullheight]",(function(t){t.bind((function(t){"full"===t&&e("body").addClass("fullheight"),"adjustable"===t&&e("body").removeClass("fullheight")}))})),wp.customize("osixthreeo_settings[home_header_height]",(function(t){t.bind((function(t){e(".home .site-header").css("min-height",t+"px")}))})),wp.customize("osixthreeo_settings[subpage_header_height]",(function(t){t.bind((function(t){e(".site-header").css("min-height",t+"px")}))})),wp.customize("osixthreeo_settings[header_bg_position]",(function(t){t.bind((function(t){var i="",o="";"left-top"===t&&(i="left",o="top"),"left-center"===t&&(i="left",o="center"),"left-bottom"===t&&(i="left",o="bottom"),"right-top"===t&&(i="right",o="top"),"right-center"===t&&(i="right",o="center"),"right-bottom"===t&&(i="right",o="bottom"),"center-top"===t&&(i="center",o="top"),"center-bottom"===t&&(i="center",o="bottom"),e(".custom-header .custom-header-image").css("background-position",i+" "+o)}))})),wp.customize("osixthreeo_settings[header_bg_repeat]",(function(t){t.bind((function(t){e(".custom-header .custom-header-image").css("background-repeat",t)}))})),wp.customize("osixthreeo_settings[header_bg_size]",(function(t){t.bind((function(t){e(".custom-header .custom-header-image").css("background-size",t)}))})),osixthreeo_colors_live_update("header_background_color",".header-wrap","background-color","transparent"),osixthreeo_colors_live_update("hero_text_primary_color",".hero-primary","color","#ffffff"),osixthreeo_colors_live_update("hero_text_secondary_color",".hero-secondary","color","#ffffff"),osixthreeo_colors_live_update("content_title_color","body.page .entry-title,body.single .entry-title,body.blog .page-title,body.archive .page-title,body.search .page-title,body.error404 .page-title,.woocommerce-products-header,.product_title.entry-title,body.page.titlelift .entry-title,body.single.titlelift .entry-title,body.blog.titlelift .page-title,body.archive.titlelift .page-title,body.search.titlelift .page-title,body.error404.titlelift .page-title,.single.titlelift .entry-meta a,.single.titlelift .entry-meta,.titlelift .archive-description,.titlelift .woocommerce-products-header,.titlelift .product_title.entry-title","color",""),osixthreeo_colors_live_update("content_bgcolor",".site-content","background-color","transparent"),osixthreeo_colors_live_update("text_color","body,button,input,select,textarea,.sidebar-widget ul a,.sidebar-widget .menu a,.comment-navigation .nav-previous a,.comment-navigation .nav-next a,.posts-navigation .nav-previous a,.posts-navigation .nav-next a,.post-navigation .nav-previous a,.post-navigation .nav-next a,.site-navigation .sub-menu a","color","#222222"),osixthreeo_colors_live_update("footer_background_color",".site-footer","background-color","#000000"),osixthreeo_colors_live_update("footer_title_color",".site-info .widget-title","color","#ffffff"),osixthreeo_colors_live_update("footer_text_color",".site-info","color","#f5f5f5"),osixthreeo_colors_live_update("footer_link_color",".site-info a","color","#dcdcdc"),osixthreeo_colors_live_update("footer_link_color_hover",".site-info a:hover","color","#ffffff"),osixthreeo_colors_live_update("meta_color",".entry-meta, .entry-meta a, .entry-footer, .entry-footer a","color","#808080"),wp.customize("osixthreeo_settings[base_font_size]",(function(t){t.bind((function(t){e(".content-inner-wrap").css("font-size",t+"px")}))})),wp.customize("osixthreeo_settings[sitetitle_font_size]",(function(t){t.bind((function(t){e(".site-title").css("font-size",t+"px")}))})),wp.customize("osixthreeo_settings[sitedescription_font_size]",(function(t){t.bind((function(t){e(".site-description").css("font-size",t+"px")}))})),wp.customize("osixthreeo_settings[menu_font_size]",(function(t){t.bind((function(t){e("#primary-navigation").css("font-size",t+"px")}))})),wp.customize("osixthreeo_settings[hero_text_primary_font_size]",(function(t){t.bind((function(t){e(".hero-primary").css("font-size",t+"px")}))})),wp.customize("osixthreeo_settings[hero_text_secondary_font_size]",(function(t){t.bind((function(t){e(".hero-secondary").css("font-size",t+"px")}))})),wp.customize("osixthreeo_settings[hero_text_primary_alignment]",(function(t){t.bind((function(t){e(".hero-primary").css("text-align",t)}))})),wp.customize("osixthreeo_settings[hero_text_secondary_alignment]",(function(t){t.bind((function(t){e(".hero-secondary").css("text-align",t)}))})),wp.customize("osixthreeo_settings[hero_scroll_button_alignment]",(function(t){t.bind((function(t){e(".hero-scroll-button").css("text-align",t)}))})),wp.customize("osixthreeo_settings[meta_font_size]",(function(t){t.bind((function(t){e(".entry-meta, .entry-footer").css("font-size",t+"px")}))})),wp.customize("osixthreeo_settings[header_font_weight]",(function(t){t.bind((function(t){t?e("h1:not(.site-title), h2, h3, h4, h5, h6").css("font-weight",t):e("h1:not(.site-title), h2, h3, h4, h5, h6").css("font-weight","normal")}))})),wp.customize("osixthreeo_settings[sitetitle_font_weight]",(function(t){t.bind((function(t){t?e(".site-title").css("font-weight",t):e(".site-title").css("font-weight","normal")}))})),wp.customize("osixthreeo_settings[sitedescription_font_weight]",(function(t){t.bind((function(t){t?e(".site-description").css("font-weight",t):e(".site-description").css("font-weight","normal")}))})),wp.customize("osixthreeo_settings[menu_font_weight]",(function(t){t.bind((function(t){t?e(".site-navigation a").css("font-weight",t):e(".site-navigation a").css("font-weight","normal")}))})),wp.customize("osixthreeo_settings[meta_font_weight]",(function(t){t.bind((function(t){t?e(".entry-meta, .entry-footer").css("font-weight",t):e(".entry-meta, .entry-footer").css("font-weight","normal")}))})),osixthreeo_colors_live_update("archives_background_color",".blog article, .archive article, .search article","background-color","transparent"),osixthreeo_colors_live_update("archives_text_color",".blog article, .archive article, .search article","color",""),osixthreeo_colors_live_update("archives_title_color",".blog article .entry-title,.archive article .entry-title,.search article .entry-title,.blog article .entry-title a,.archive article .entry-title a,.search article .entry-title a","color",""),osixthreeo_colors_live_update("archives_meta_color",".blog article .entry-meta,.archive article .entry-meta,.search article .entry-meta, .blog article .entry-meta a,.archive article .entry-meta a,.search article .entry-meta a","color",""),osixthreeo_colors_live_update("archives_link_color",".blog article .entry-content a,.archive article .entry-content a,.search article .entry-content a","color",""),osixthreeo_colors_live_update("archives_link_color_hover",".blog article .entry-content a:hover,.archive article .entry-content a:hover,.search article .entry-content a:hover","color",""),wp.customize("osixthreeo_settings[archives_hide_featuredimage]",(function(t){t.bind((function(t){!0===t?e(".blog article .fi-link,.archive article .fi-link,.search article .fi-link").css("display","none"):e(".blog article .fi-link,.archive article .fi-link,.search article .fi-link").css("display","block")}))})),wp.customize("osixthreeo_settings[archives_hide_excerpt]",(function(t){t.bind((function(t){!0===t?e(".blog article .entry-content,.archive article .entry-content,.search article .entry-content").css("display","none"):e(".blog article .entry-content,.archive article .entry-content,.search article .entry-content").css("display","block")}))})),wp.customize("osixthreeo_settings[archives_hide_readmore]",(function(t){t.bind((function(t){!0===t?e(".blog article footer,.archive article footer,.search article footer").css("display","none"):e(".blog article footer,.archive article footer,.search article footer").css("display","block")}))})),wp.customize("osixthreeo_settings[archives_hide_meta]",(function(t){t.bind((function(t){!0===t?e(".blog article .entry-meta,.archive article .entry-meta,.search article .entry-meta").css("display","none"):e(".blog article .entry-meta,.archive article .entry-meta,.search article .entry-meta").css("display","block")}))})),wp.customize("osixthreeo_settings[archives_pad_left]",(function(t){t.bind((function(t){e(".blog article .entry-header,.archive article .entry-header,.search article .entry-header,.blog article .entry-content,.archive article .entry-content,.search article .entry-content,.blog article .link-more,.archive article .link-more,.search article .link-more").css("padding-left",t+"px")}))})),wp.customize("osixthreeo_settings[archives_pad_right]",(function(t){t.bind((function(t){e(".blog article .entry-header,.archive article .entry-header,.search article .entry-header,.blog article .entry-content,.archive article .entry-content,.search article .entry-content,.blog article .link-more,.archive article .link-more,.search article .link-more").css("padding-right",t+"px")}))})),wp.customize("osixthreeo_settings[archives_pad_top]",(function(t){t.bind((function(t){e(".blog article .entry-header,.archive article .entry-header,.search article .entry-header,.archive article.format-aside .entry-content,.blog article.format-aside .entry-content,.search article.format-aside .entry-content,.archive article.format-status .entry-content,.blog article.format-status .entry-content,.search article.format-status .entry-content").css("padding-top",t+"px")}))})),wp.customize("osixthreeo_settings[archives_pad_bottom]",(function(t){t.bind((function(t){e(".blog article .link-more,.archive article .link-more,.search article .link-more").css("padding-bottom",t+"px")}))})),wp.customize("osixthreeo_settings[archives_border_radius]",(function(t){t.bind((function(t){e(".blog article, .archive article, .search article").css("border-radius",t+"px")}))}))}(jQuery);