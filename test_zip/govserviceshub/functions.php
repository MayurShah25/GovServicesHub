<?php
/**
 * Gov Services Hub Theme Functions
 */

function gsh_enqueue_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style( 'gsh-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version') );
    
    // Add Google Fonts
    wp_enqueue_style( 'gsh-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap', false );
}
add_action( 'wp_enqueue_scripts', 'gsh_enqueue_scripts' );

function gsh_theme_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title.
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support( 'post-thumbnails' );

    // Register Navigation Menus
    register_nav_menus( array(
        'primary' => esc_html__( 'Primary Menu', 'govserviceshub' ),
        'footer'  => esc_html__( 'Footer Menu', 'govserviceshub' ),
    ) );
}
add_action( 'after_setup_theme', 'gsh_theme_setup' );
