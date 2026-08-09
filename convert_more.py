import os

theme_dir = r'c:\Users\kewal\GSH\wordpress-theme\govserviceshub'

# 5. page-enterprise-solutions.php
enterprise_php = '''<?php
/**
 * Template Name: Enterprise Solutions Page
 */
get_header(); ?>

<main class="page-main">
    <div class="page-hero has-pattern">
      <div class="container page-hero-content text-center">
        <h1 class="page-hero-title">Enterprise Solutions</h1>
        <p class="page-hero-subtitle">Bringing government-grade security, compliance, and reliability to the commercial sector.</p>
      </div>
      <div class="page-hero-pattern"></div>
    </div>
    
    <section class="section">
      <div class="container text-center">
        <h2>Commercial Sector Services</h2>
        <p style="margin-top: 20px; color: var(--text-secondary);">
          We leverage our deep expertise in high-security government environments to provide commercial enterprises with robust IT staffing and solutions.
        </p>
      </div>
    </section>
</main>

<?php get_footer(); ?>
'''

with open(os.path.join(theme_dir, 'page-enterprise-solutions.php'), 'w', encoding='utf-8') as f:
    f.write(enterprise_php)

# 6. page-federal-government.php
federal_php = '''<?php
/**
 * Template Name: Federal Government Page
 */
get_header(); ?>

<main class="page-main">
    <div class="page-hero has-pattern">
      <div class="container page-hero-content text-center">
        <h1 class="page-hero-title">Federal Government</h1>
        <p class="page-hero-subtitle">Modernization and staffing solutions for civilian agencies.</p>
      </div>
      <div class="page-hero-pattern"></div>
    </div>
    
    <section class="section">
      <div class="container text-center">
        <h2>Civilian Agency Support</h2>
        <p style="margin-top: 20px; color: var(--text-secondary);">
          Providing top-tier IT talent to help federal agencies modernize infrastructure and improve citizen services.
        </p>
      </div>
    </section>
</main>

<?php get_footer(); ?>
'''

with open(os.path.join(theme_dir, 'page-federal-government.php'), 'w', encoding='utf-8') as f:
    f.write(federal_php)

# 7. page-state-county-education.php
sled_php = '''<?php
/**
 * Template Name: State, County, and Education Page
 */
get_header(); ?>

<main class="page-main">
    <div class="page-hero has-pattern">
      <div class="container page-hero-content text-center">
        <h1 class="page-hero-title">State, County & Education</h1>
        <p class="page-hero-subtitle">Scalable IT solutions for state and local governments and educational institutions.</p>
      </div>
      <div class="page-hero-pattern"></div>
    </div>
    
    <section class="section">
      <div class="container text-center">
        <h2>SLED IT Services</h2>
        <p style="margin-top: 20px; color: var(--text-secondary);">
          Empowering communities and schools with cost-effective, secure technology talent and solutions.
        </p>
      </div>
    </section>
</main>

<?php get_footer(); ?>
'''

with open(os.path.join(theme_dir, 'page-state-county-education.php'), 'w', encoding='utf-8') as f:
    f.write(sled_php)

# 8. page-defense-intelligence.php
defense_php = '''<?php
/**
 * Template Name: Defense & Intelligence Page
 */
get_header(); ?>

<main class="page-main">
    <div class="page-hero has-pattern">
      <div class="container page-hero-content text-center">
        <h1 class="page-hero-title">Defense & Intelligence</h1>
        <p class="page-hero-subtitle">Secure, cleared talent for national security missions.</p>
      </div>
      <div class="page-hero-pattern"></div>
    </div>
    
    <section class="section">
      <div class="container text-center">
        <h2>Mission Critical IT</h2>
        <p style="margin-top: 20px; color: var(--text-secondary);">
          Deploying highly cleared cybersecurity experts and engineers to support our nation's defense.
        </p>
      </div>
    </section>
</main>

<?php get_footer(); ?>
'''

with open(os.path.join(theme_dir, 'page-defense-intelligence.php'), 'w', encoding='utf-8') as f:
    f.write(defense_php)

print("Created remaining template pages")
