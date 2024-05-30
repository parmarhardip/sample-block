<?php
/**
 * Plugin Name:       Sample block
 * Plugin URI:
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sample-block
 * Domain Path:       sample-block
 *
 * @package Hardip
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function hardip_sample_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'hardip_sample_block_block_init' );

add_action( 'enqueue_block_editor_assets', 'enqueue_block_editor_assets' );
add_action( 'enqueue_block_assets', 'enqueue_block_editor_assets' );

function enqueue_block_editor_assets() {
	wp_localize_script(
		'hardip-sample-block-editor-script',
		'SampleData',
		array(
			'nonce' => wp_create_nonce( 'wp_rest' ),
		)
	);
	wp_localize_script(
		'hardip-sample-block-editor-script',
		'SampleData',
		array(
			'nonce' => wp_create_nonce( 'wp_rest' ),
		)
	);
}

