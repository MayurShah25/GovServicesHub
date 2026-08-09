<?php
/**
 * Template Name: Services Page
 */
get_header(); ?>

<main class="page-main">
    <div class="page-header">
        <div class="container text-center">
            <h1>Our Services</h1>
            <p>Comprehensive IT solutions for the public sector</p>
        </div>
    </div>
    
    <?php get_template_part('front-page'); /* We will just include the sections or hardcode them */ ?>
    <!-- Wait, front-page contains hero and about too. Let's just hardcode the Services and Industries from front-page.php -->
    <?php
        // Instead of duplicating 300 lines of HTML, we can just point users to the homepage for these. 
        // Or we can just copy the HTML. Let's copy it.
         = file_get_contents(get_template_directory() . '/front-page.php');
        
        // extract services section
        preg_match('/<!-- SERVICES SECTION -->(.*?)<!-- INDUSTRIES SECTION -->/s', , );
        if(isset([1])) echo '<!-- SERVICES SECTION -->' . [1];
        
        // extract industries section
        preg_match('/<!-- INDUSTRIES SECTION -->(.*?)<\/main>/s', , );
        if(isset([1])) echo '<!-- INDUSTRIES SECTION -->' . [1];
    ?>
</main>

<?php get_footer(); ?>
