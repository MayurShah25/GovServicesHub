import os

theme_dir = r'c:\Users\kewal\GSH\wordpress-theme\govserviceshub'

# 1. page-services.php
services_php = '''<?php
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
'''

with open(os.path.join(theme_dir, 'page-services.php'), 'w', encoding='utf-8') as f:
    f.write(services_php)


# 2. page-careers.php
careers_php = '''<?php
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
'''

with open(os.path.join(theme_dir, 'page-careers.php'), 'w', encoding='utf-8') as f:
    f.write(careers_php)


# 3. page-government-solutions.php
gov_solutions_php = '''<?php
/**
 * Template Name: Government Solutions Page
 */
get_header(); ?>

<main class="page-main">
    <div class="page-hero has-pattern">
      <div class="container page-hero-content text-center">
        <h1 class="page-hero-title">Government Solutions</h1>
        <p class="page-hero-subtitle">Empowering the public sector with elite, secure, and scalable technical talent.</p>
      </div>
      <div class="page-hero-pattern"></div>
    </div>
    
    <section class="section service-feature-section">
      <div class="container">
        <div class="service-feature-grid">
          <div class="service-feature-content">
            <h2>Staffing Public Service</h2>
            <p class="service-feature-desc">Gov Services Hub partners with defense, federal, and state agencies to supply the highly skilled personnel needed to modernize infrastructure, enhance cybersecurity, and leverage data analytics.</p>
            <ul class="service-feature-list">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Defense and Intelligence Talent</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Federal Government Modernization Teams</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>State, Local, and Education (SLED) Staffing</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Compliant, Secure, and Cleared Personnel</span>
              </li>
            </ul>
          </div>
          <div class="service-feature-image">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/gov-overview.png" alt="Staffing Public Service" />
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-white">
      <div class="container" style="max-width: 900px;">
        <div class="text-center" style="margin-bottom: 40px;">
          <h2 class="section-title">Comprehensive Overview</h2>
          <div class="section-divider center"></div>
        </div>
        <div class="long-description-content">
          <p class="lead-text" style="margin-bottom: 24px;">
            At Gov Services Hub, we recognize that the public sector faces unique, unprecedented challenges. From rapid technological shifts to ever-increasing security threats, government agencies must modernize their operations and require the absolute best talent to do so safely and efficiently.
          </p>
          <p class="lead-text" style="margin-bottom: 24px;">
            We serve as a trusted partner to defense, federal, and state agencies, supplying the elite technical professionals that drive digital transformation. Our deeply cleared personnel and specialized subject matter experts ensure that your mission-critical initiatives are executed flawlessly under the most demanding conditions.
          </p>
        </div>
      </div>
    </section>

    <section class="section bg-light text-center">
      <div class="container">
        <h2 style="color: var(--primary-color); margin-bottom: var(--spacing-md);">Explore Our Government Domains</h2>
        <div style="display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap;">
          <a href="<?php echo esc_url( home_url( '/government-solutions/defense-intelligence' ) ); ?>" class="btn btn-primary">Defense & Intelligence</a>
          <a href="<?php echo esc_url( home_url( '/government-solutions/federal' ) ); ?>" class="btn btn-primary">Federal Government</a>
          <a href="<?php echo esc_url( home_url( '/government-solutions/state-local' ) ); ?>" class="btn btn-primary">State, County & Education</a>
        </div>
      </div>
    </section>
</main>

<?php get_footer(); ?>
'''
with open(os.path.join(theme_dir, 'page-government-solutions.php'), 'w', encoding='utf-8') as f:
    f.write(gov_solutions_php)


# 4. auto-install functions in functions.php
functions_php_path = os.path.join(theme_dir, 'functions.php')
with open(functions_php_path, 'r', encoding='utf-8') as f:
    functions_content = f.read()

if 'gsh_auto_create_pages' not in functions_content:
    auto_install_code = '''
// Auto-create pages on theme activation
function gsh_auto_create_pages() {
     = array(
        'Home' => 'front-page.php',
        'About' => 'page-about.php',
        'Contact' => 'page-contact.php',
        'Services' => 'page-services.php',
        'Careers' => 'page-careers.php',
        'Government Solutions' => 'page-government-solutions.php'
    );

    foreach (  as  =>  ) {
         = get_page_by_title(  );
        if ( ! isset( ->ID ) ) {
             = wp_insert_post( array(
                'post_title'     => ,
                'post_type'      => 'page',
                'post_status'    => 'publish',
                'post_author'    => 1,
            ) );
            if (  && ! empty(  ) ) {
                update_post_meta( , '_wp_page_template',  );
            }
            
            // Set Home as front page
            if (  == 'Home' ) {
                update_option( 'show_on_front', 'page' );
                update_option( 'page_on_front',  );
            }
        }
    }
}
add_action( 'after_switch_theme', 'gsh_auto_create_pages' );
'''
    with open(functions_php_path, 'a', encoding='utf-8') as f:
        f.write(auto_install_code)

print("Created pages and updated functions.php")
