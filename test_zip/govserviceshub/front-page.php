<?php
/**
 * Template Name: Home Page
 */
get_header(); ?>

<main class="page-main">
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-tag">ELITE TALENT SOLUTIONS</div>
          <h1>Connecting Elite Talent with Mission-Critical Roles</h1>
          <p class="hero-subtitle">
            We provide highly skilled, thoroughly vetted professionals to Federal, State, and Commercial organizations to drive your most critical initiatives forward.
          </p>
          <div class="hero-actions">
            <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="btn btn-primary">
                Explore Services 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 8px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
        <div class="hero-image-wrapper">
          <img 
            src="<?php echo get_template_directory_uri(); ?>/assets/hero-image.png" 
            alt="Government IT Staffing" 
            class="hero-image" 
          />
          <div class="hero-badge hero-badge-top">
            <div class="badge-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <div class="badge-text">
              <span>Top Rated</span>
              <strong>Talent Partner</strong>
            </div>
          </div>
          <div class="hero-badge hero-badge-bottom">
            <div class="badge-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div class="badge-text">
              <strong>100%</strong>
              <span>Compliance</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section class="section" id="about">
      <div class="container">
        <div class="about-header-row">
          <div class="about-header-left">
            <div class="hero-tag">ABOUT US</div>
            <h2>Connecting Elite Talent with Mission-Driven Organizations</h2>
          </div>
          <div class="about-header-right">
            <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="btn btn-primary">Contact Us</a>
          </div>
        </div>
        
        <div class="about-container">
          <div class="about-content">
            <div class="about-metrics" style="margin-bottom: 40px;">
              <div class="about-metric-card">
                <div class="metric-number">10+</div>
                <div class="metric-text">
                  <h4>Years Experience</h4>
                  <p>Proven track record in talent acquisition.</p>
                </div>
              </div>
              <div class="about-metric-card">
                <div class="metric-number">50+</div>
                <div class="metric-text">
                  <h4>Partners</h4>
                  <p>Trusted across public and private sectors.</p>
                </div>
              </div>
              <div class="about-metric-card">
                <div class="metric-number">100%</div>
                <div class="metric-text">
                  <h4>Compliance</h4>
                  <p>Adherence to federal security standards.</p>
                </div>
              </div>
            </div>

            <div class="about-context-highlight">
              <p class="about-desc" style="margin-bottom: 0;">
                At Gov Services Hub, we know that people solve problems, not just technology. We specialize in sourcing and deploying top-tier, cleared technical professionals for Federal, State, and Commercial missions.
              </p>
              <p class="about-desc" style="margin-top: 16px; margin-bottom: 0;">
                From agile developers to cybersecurity experts, our rigorous talent acquisition process delivers scalable, compliant workforces that seamlessly integrate with your teams to drive operational excellence.
              </p>
            </div>
          </div>
          
          <div class="about-image-wrapper">
            <img 
              src="<?php echo get_template_directory_uri(); ?>/assets/about-unique.png" 
              alt="About Gov Services Hub" 
              class="about-image" 
            />
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES SECTION -->
    <section class="section bg-light" id="services">
        <div class="container">
            <div class="section-header text-center">
                <div class="badge">Core Capabilities</div>
                <h2>Comprehensive IT Solutions</h2>
                <p class="section-desc">Delivering excellence across the entire technology spectrum for public sector organizations.</p>
            </div>
            
            <div class="department-grid">
                <div class="dept-card">
                    <div class="dept-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <h3>Staff Augmentation</h3>
                    <p>Providing cleared, highly skilled IT professionals to seamlessly integrate with your existing teams.</p>
                </div>

                <div class="dept-card">
                    <div class="dept-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </div>
                    <h3>Cybersecurity</h3>
                    <p>Protecting critical infrastructure and sensitive data with advanced security frameworks.</p>
                </div>

                <div class="dept-card">
                    <div class="dept-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    </div>
                    <h3>App Development</h3>
                    <p>Building secure, scalable, and modern applications tailored to government workflows.</p>
                </div>
            </div>

            <div class="text-center" style="margin-top: 3rem;">
                <a href="<?php echo esc_url( home_url( '/government-solutions' ) ); ?>" class="btn btn-outline">View All Solutions</a>
            </div>
        </div>
    </section>

    <!-- INDUSTRIES SECTION -->
    <section class="section" id="industries">
        <div class="container">
            <div class="section-header text-center">
                <div class="badge">Who We Serve</div>
                <h2>Government & Enterprise Solutions</h2>
                <p class="section-desc">We tailor our approach to meet the strict compliance and operational needs of different sectors.</p>
            </div>
            
            <div class="industries-grid">
                <div class="industry-card">
                    <h3>Defense & Intelligence</h3>
                    <p>Supporting national security missions with cleared personnel and secure technology implementations.</p>
                    <a href="<?php echo esc_url( home_url( '/government-solutions/defense-intelligence' ) ); ?>" class="industry-link">Learn more &rarr;</a>
                </div>
                <div class="industry-card">
                    <h3>Federal Government</h3>
                    <p>Assisting civilian agencies in digital transformation and modernization efforts.</p>
                    <a href="<?php echo esc_url( home_url( '/government-solutions/federal' ) ); ?>" class="industry-link">Learn more &rarr;</a>
                </div>
                <div class="industry-card">
                    <h3>State & Local</h3>
                    <p>Empowering communities with cost-effective, scalable IT services.</p>
                    <a href="<?php echo esc_url( home_url( '/government-solutions/state-local' ) ); ?>" class="industry-link">Learn more &rarr;</a>
                </div>
                <div class="industry-card">
                    <h3>Commercial Enterprise</h3>
                    <p>Bringing government-grade security and reliability to the private sector.</p>
                    <a href="<?php echo esc_url( home_url( '/enterprise-solutions' ) ); ?>" class="industry-link">Learn more &rarr;</a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
