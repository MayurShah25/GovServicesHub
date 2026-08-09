<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="header">
    <div class="container header-content">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="Gov Services Hub" class="header-logo-img" style="max-height: 90px;" />
        </a>
        
        <nav class="desktop-nav" id="main-nav">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="nav-link">Home</a>
            <a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="nav-link">About Us</a>
            
            <div class="dropdown">
                <button class="dropdown-toggle nav-link">
                    Services 
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="dropdown-menu">
                    <a href="<?php echo esc_url( home_url( '/services/staff-augmentation' ) ); ?>" class="dropdown-item">Staff Augmentation</a>
                    <a href="<?php echo esc_url( home_url( '/services/cybersecurity' ) ); ?>" class="dropdown-item">Cybersecurity</a>
                    <a href="<?php echo esc_url( home_url( '/services/application-development' ) ); ?>" class="dropdown-item">Application Development</a>
                    <a href="<?php echo esc_url( home_url( '/services/cloud-infrastructure' ) ); ?>" class="dropdown-item">Cloud & Infrastructure</a>
                    <a href="<?php echo esc_url( home_url( '/services/data-analytics' ) ); ?>" class="dropdown-item">Data Analytics</a>
                    <a href="<?php echo esc_url( home_url( '/services/government-support' ) ); ?>" class="dropdown-item">Government Support Solution</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropdown-toggle nav-link">
                    Government Solutions
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="dropdown-menu">
                    <a href="<?php echo esc_url( home_url( '/government-solutions' ) ); ?>" class="dropdown-item">Overview</a>
                    <a href="<?php echo esc_url( home_url( '/government-solutions/defense-intelligence' ) ); ?>" class="dropdown-item">Defense and Intelligence</a>
                    <a href="<?php echo esc_url( home_url( '/government-solutions/federal' ) ); ?>" class="dropdown-item">Federal Government</a>
                    <a href="<?php echo esc_url( home_url( '/government-solutions/state-local' ) ); ?>" class="dropdown-item">State, County & Education</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropdown-toggle nav-link">
                    Enterprise Solutions
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div class="dropdown-menu">
                    <a href="<?php echo esc_url( home_url( '/enterprise-solutions' ) ); ?>" class="dropdown-item">Overview</a>
                </div>
            </div>

            <a href="<?php echo esc_url( home_url( '/careers' ) ); ?>" class="nav-link">Careers</a>
            <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="btn btn-primary" style="margin-left: var(--spacing-sm);">Contact Us</a>
        </nav>

        <button class="mobile-menu-btn" id="mobile-menu-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        </button>
    </div>
</header>
