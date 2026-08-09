<?php
/**
 * Template Name: Careers Page
 */
get_header(); ?>

<main class="page-main">
    <div class="page-header">
        <div class="container text-center">
            <h1>Careers</h1>
            <p>Join our mission to empower government innovation</p>
        </div>
    </div>
    <section class="section">
        <div class="container text-center">
            <h2>Current Openings</h2>
            <p style="margin-top: 20px; color: var(--text-secondary);">
              We are always looking for talented individuals to join our team. 
              Currently, there are no open positions, but please check back later or send us your resume.
            </p>
            <div style="margin-top: 40px;">
                <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="btn btn-primary">Send Resume</a>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
