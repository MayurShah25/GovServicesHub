<?php
/**
 * Template Name: About Page
 */
get_header(); ?>

<main class="page-main">
    <section class="page-hero">
        <div class="container text-center">
            <h1>About Us</h1>
            <p class="page-hero-subtitle">Our mission, vision, and values.</p>
        </div>
    </section>

    <section class="section" id="about">
        <div class="container about-container">
            <div class="about-content">
                <div class="badge">Our Mission</div>
                <h2>Dedicated to Empowering Government Innovation</h2>
                <p class="about-desc">
                    At Gov Services Hub, we understand the critical nature of public sector projects. We provide top-tier IT staffing and technology solutions tailored specifically for government agencies, ensuring compliance, security, and efficiency.
                </p>
                <p class="about-desc">
                    Founded on the principles of integrity, excellence, and service, we partner with federal, state, and local entities to drive digital transformation and support mission-critical operations.
                </p>
            </div>
            
            <div class="about-image-wrapper">
                <img 
                    src="<?php echo get_template_directory_uri(); ?>/assets/about.png" 
                    alt="About Gov Services Hub" 
                    class="about-image" 
                />
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
