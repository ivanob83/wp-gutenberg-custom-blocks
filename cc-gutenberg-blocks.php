<?php
/**
 * Plugin Name: CC Gutenberg Blocks
 * Plugin URI: https://artivo-dev.com/
 * Author: Ivan Obradovic - Artivo
 * Author URI: https://artivo-dev.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package GB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Define global constants.
 *
 * @since 1.0.0
 */
// Plugin version.
if ( ! defined( 'GB_VERSION' ) ) {
	define( 'GB_VERSION', '1.0.0' );
}

if ( ! defined( 'GB_NAME' ) ) {
	define( 'GB_NAME', trim( dirname( plugin_basename( __FILE__ ) ), '/' ) );
}

if ( ! defined( 'GB_DIR' ) ) {
	define( 'GB_DIR', WP_PLUGIN_DIR . '/' . GB_NAME );
}

if ( ! defined( 'GB_URL' ) ) {
	define( 'GB_URL', WP_PLUGIN_URL . '/' . GB_NAME );
}

/**
 * Register Custom Block Category.
 */
add_filter('block_categories_all', function($categories, $post) {
    return array_merge(
        $categories,
        [
            [
                'slug' => 'cc-blocks',      
                'title' => 'CC Blocks',    
                'icon'  => 'star-filled'     
            ]
        ]
    );
}, 10, 2);

/**
 * Auto-register all blocks.
 */
add_action( 'init', function() {
    $blocks = glob( __DIR__ . '/block/*/build' );
    
    foreach ( $blocks as $block_dir ) {
        if ( file_exists( $block_dir . '/block.json' ) ) {
            register_block_type( $block_dir );
        }
    }
} );

/**
 * Enqueue theme CSS in block editor.
 */
add_action( 'enqueue_block_editor_assets', function() {
    wp_enqueue_style(
        'swiftcart-editor-styles',
        get_template_directory_uri() . '/assets/css/swiftcart.css',
        array(),
        '1.0.2'
    );
} );

