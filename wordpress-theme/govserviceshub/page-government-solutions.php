<?php
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
