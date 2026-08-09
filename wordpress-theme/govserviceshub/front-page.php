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
    <section class="section section-bg-light" id="services">
        <div class="container">
            <div class="section-header text-center">
                <h2>Our Core Disciplines</h2>
                <p class="section-subtitle">Providing specialized talent across critical technology domains</p>
            </div>
            
            <div class="services-grid">
                <!-- 1 -->
                <div class="service-card">
                    <div class="service-image-wrapper">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/service-staff.png" alt="Staff Augmentation" class="service-image" />
                        <div class="service-icon-wrapper">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="service-icon"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3 class="service-title">Staff Augmentation</h3>
                        <p class="service-desc">Flexible, scalable IT teams designed to integrate seamlessly into your projects and meet rigorous government standards.</p>
                        <button class="service-read-more">
                            Read More 
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                    </div>
                </div>
                <!-- 2 -->
                <div class="service-card">
                    <div class="service-image-wrapper">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/service-app.jpg" alt="Application Development Talent" class="service-image" />
                        <div class="service-icon-wrapper">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="service-icon"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3 class="service-title">Application Development Talent</h3>
                        <p class="service-desc">We supply elite software engineers and developers experienced in building custom, secure applications.</p>
                        <button class="service-read-more">
                            Read More 
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                    </div>
                </div>
                <!-- 3 -->
                <div class="service-card">
                    <div class="service-image-wrapper">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/service-gov-support.jpg" alt="IT Consulting & Strategy Experts" class="service-image" />
                        <div class="service-icon-wrapper">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="service-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3 class="service-title">IT Consulting & Strategy Experts</h3>
                        <p class="service-desc">Access top-tier consultants for guidance on digital transformation, architecture, and technology planning.</p>
                        <button class="service-read-more">
                            Read More 
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                    </div>
                </div>
                <!-- 4 -->
                <div class="service-card">
                    <div class="service-image-wrapper">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/service-cyber.png" alt="Cybersecurity Professionals" class="service-image" />
                        <div class="service-icon-wrapper">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="service-icon"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3 class="service-title">Cybersecurity Professionals</h3>
                        <p class="service-desc">Deploy highly cleared security analysts and engineers to manage robust security frameworks and compliance.</p>
                        <button class="service-read-more">
                            Read More 
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                    </div>
                </div>
                <!-- 5 -->
                <div class="service-card">
                    <div class="service-image-wrapper">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/service-cloud.jpg" alt="Cloud Infrastructure Engineers" class="service-image" />
                        <div class="service-icon-wrapper">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="service-icon"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3 class="service-title">Cloud Infrastructure Engineers</h3>
                        <p class="service-desc">Specialized talent for scalable and secure cloud migration, architecture, and management.</p>
                        <button class="service-read-more">
                            Read More 
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                    </div>
                </div>
                <!-- 6 -->
                <div class="service-card">
                    <div class="service-image-wrapper">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/service-data.jpg" alt="Managed IT Specialists" class="service-image" />
                        <div class="service-icon-wrapper">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="service-icon"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        </div>
                    </div>
                    <div class="service-content">
                        <h3 class="service-title">Managed IT Specialists</h3>
                        <p class="service-desc">Expert personnel to provide end-to-end management of your IT infrastructure for optimal performance.</p>
                        <button class="service-read-more">
                            Read More 
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- INDUSTRIES SECTION -->
    <section class="section" id="industries">
        <div class="container">
            <div class="section-header text-center">
                <div class="badge">Our Expertise</div>
                <h2>Industries We Serve</h2>
                <p class="section-subtitle">Delivering specialized solutions across federal sectors</p>
            </div>
            
            <div class="industries-grid">
                <div class="industry-card">
                    <div class="industry-icon-wrapper">
                        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l5.5 4L5 15.5 2.5 15l-1 1 3.5 2.5 2.5 3.5 1-1-.5-2.5 3.5-3.5 4 5.5c.3.5.7.9 1.2.9h.1c.4-.1.7-.5.9-1L19.2 17.8z"></path></svg>
                    </div>
                    <h3>Defense & Aerospace</h3>
                </div>
                <div class="industry-card">
                    <div class="industry-icon-wrapper">
                        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path><circle cx="20" cy="10" r="2"></circle></svg>
                    </div>
                    <h3>Healthcare Services</h3>
                </div>
                <div class="industry-card">
                    <div class="industry-icon-wrapper">
                        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11"></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>
                    </div>
                    <h3>Financial Regulation</h3>
                </div>
                <div class="industry-card">
                    <div class="industry-icon-wrapper">
                        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                    </div>
                    <h3>Public Administration</h3>
                </div>
                <div class="industry-card">
                    <div class="industry-icon-wrapper">
                        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    </div>
                    <h3>Legal & Justice</h3>
                </div>
                <div class="industry-card">
                    <div class="industry-icon-wrapper">
                        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a2 2 0 0 1-.019 3.138l-8.5 8a2 2 0 0 1-2.748 0l-8.5-8a2 2 0 0 1-.019-3.138l8.5-7.9a2 2 0 0 1 2.768 0l8.5 7.9Z"></path><path d="M12 12v9"></path><path d="M15 15v6"></path><path d="M9 15v6"></path><path d="M22 10v6"></path><path d="M2 10v6"></path></svg>
                    </div>
                    <h3>Education</h3>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
