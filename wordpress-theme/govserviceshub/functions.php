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

// Auto-create pages on theme activation
function gsh_auto_create_pages() {
    $pages = array(
        'Home' => 'front-page.php',
        'About Us' => 'page-about.php',
        'Contact Us' => 'page-contact.php',
        'Services' => 'page-services.php',
        'Careers' => 'page-careers.php',
        'Government Solutions' => 'page-government-solutions.php',
        'Enterprise Solutions' => 'page-enterprise-solutions.php',
        'Defense & Intelligence' => 'page-defense-intelligence.php',
        'Federal Government' => 'page-federal-government.php',
        'State, County & Education' => 'page-state-county-education.php'
    );

    foreach ( $pages as $page_title => $page_template ) {
        $page_check = get_page_by_title( $page_title );
        if ( ! isset( $page_check->ID ) ) {
            $new_page_id = wp_insert_post( array(
                'post_title'     => $page_title,
                'post_type'      => 'page',
                'post_status'    => 'publish',
                'post_author'    => 1,
            ) );
            if ( $new_page_id && ! empty( $page_template ) ) {
                update_post_meta( $new_page_id, '_wp_page_template', $page_template );
            }
            
            // Set Home as front page
            if ( $page_title == 'Home' ) {
                update_option( 'show_on_front', 'page' );
                update_option( 'page_on_front', $new_page_id );
            }
        }
    }
}
add_action( 'after_switch_theme', 'gsh_auto_create_pages' );