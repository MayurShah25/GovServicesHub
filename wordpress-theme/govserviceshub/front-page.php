<?php
/**
 * Template Name: Home Page
 */
get_header(); ?>

<main class="page-main">
    <!-- HERO SECTION -->
    <section class="hero-section">
        <div class="hero-bg">
            <img 
                src="<?php echo get_template_directory_uri(); ?>/assets/hero-image.png" 
                alt="Government IT Services Background" 
                class="hero-image"
            />
            <div class="hero-overlay"></div>
        </div>
        
        <div class="container hero-content">
            <div class="badge">Trusted Partner</div>
            <h1 class="hero-title">Empowering Government Through Technology</h1>
            <p class="hero-subtitle">
                Gov Services Hub delivers innovative, secure, and scalable IT solutions for federal, state, and local agencies, ensuring mission success.
            </p>
            <div class="hero-actions">
                <a href="<?php echo esc_url( home_url( '/services/staff-augmentation' ) ); ?>" class="btn btn-primary btn-lg">Explore Services</a>
                <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="btn btn-outline btn-lg">Contact Us</a>
            </div>
        </div>
    </section>

    <!-- ABOUT SECTION -->
    <section class="section" id="about">
        <div class="container about-container">
            <div class="about-content">
                <div class="badge">About Us</div>
                <h2>Dedicated to Empowering Government Innovation</h2>
                <p class="about-desc">
                    At Gov Services Hub, we understand the critical nature of public sector projects. We provide top-tier IT staffing and technology solutions tailored specifically for government agencies, ensuring compliance, security, and efficiency.
                </p>
                
                <div class="stats-grid">
                    <div class="stat-item">
                        <h3 class="stat-number">10+</h3>
                        <p class="stat-label">Years Experience</p>
                    </div>
                    <div class="stat-item">
                        <h3 class="stat-number">50+</h3>
                        <p class="stat-label">Federal Clients</p>
                    </div>
                    <div class="stat-item">
                        <h3 class="stat-number">100%</h3>
                        <p class="stat-label">Compliance</p>
                    </div>
                </div>
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
