<?php
/**
 * The template for displaying all single pages
 */

get_header();
?>

<main class="page-main">
    <?php
    while ( have_posts() ) :
        the_post();
        ?>
        <section class="page-hero">
            <div class="container text-center">
                <h1><?php the_title(); ?></h1>
                <?php if ( has_excerpt() ) : ?>
                    <p class="page-hero-subtitle"><?php echo get_the_excerpt(); ?></p>
                <?php endif; ?>
            </div>
        </section>

        <?php if ( has_post_thumbnail() ) : ?>
            <div class="container section">
                <div class="service-feature-row">
                    <div class="service-feature-content" style="flex: 1;">
                        <?php the_content(); ?>
                    </div>
                    <div class="service-feature-image" style="flex: 1;">
                        <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php the_title_attribute(); ?>" style="width: 100%; border-radius: 8px;">
                    </div>
                </div>
            </div>
        <?php else : ?>
            <div class="container section">
                <?php the_content(); ?>
            </div>
        <?php endif; ?>

    <?php endwhile; ?>
</main>

<?php
get_footer();
