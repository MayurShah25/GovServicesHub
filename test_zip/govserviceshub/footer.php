<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-about">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="footer-logo" style="justify-content: center;">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="Gov Services Hub" class="footer-logo-img" style="max-height: 140px; filter: brightness(0) invert(1);" />
                </a>
                <p>Gov Services Hub is a trusted talent organization, providing tailored IT staffing solutions that meet the needs of Federal, State, and Commercial clients.</p>
                
                <div class="footer-newsletter">
                    <h4>Subscribe to Newsletter</h4>
                    <form class="newsletter-form">
                        <input type="email" placeholder="Your Email Address" required />
                        <button type="submit" aria-label="Subscribe">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </button>
                    </form>
                </div>
            </div>
            
            <div class="footer-links">
                <h4 class="footer-subtitle">Quick Links</h4>
                <ul>
                    <li><a href="<?php echo esc_url( home_url( '/about' ) ); ?>">About Us</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/services' ) ); ?>">Services</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/careers' ) ); ?>">Careers</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/contact' ) ); ?>">Contact Us</a></li>
                </ul>
            </div>
            
            <div class="footer-links">
                <h4 class="footer-subtitle">IT Services</h4>
                <ul>
                    <li><a href="<?php echo esc_url( home_url( '/services/staff-augmentation' ) ); ?>">Staff Augmentation</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/services/cybersecurity' ) ); ?>">Cybersecurity</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/services/application-development' ) ); ?>">App Development</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/services/cloud-infrastructure' ) ); ?>">Cloud Solutions</a></li>
                </ul>
            </div>
            
            <div class="footer-contact">
                <h4 class="footer-subtitle">Contact Info</h4>
                <ul class="contact-list">
                    <li>
                        <div class="contact-icon-bg"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                        <span>123 Government Way, Washington DC 20001</span>
                    </li>
                    <li>
                        <div class="contact-icon-bg"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
                        <span>+1 (703) 659-1120</span>
                    </li>
                    <li>
                        <div class="contact-icon-bg"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
                        <span>info@govserviceshub.com</span>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> Gov Services Hub. All rights reserved.</p>
        </div>
    </div>
</footer>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('main-nav');
    
    if(mobileBtn && nav) {
        mobileBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Handle dropdown toggles for mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const menu = this.nextElementSibling;
                menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    });
});
</script>

<?php wp_footer(); ?>
</body>
</html>
