<footer class="footer">
    <div class="container footer-content">
        <div class="footer-brand">
            <h3 class="footer-logo">Gov Services <span class="logo-accent">Hub</span></h3>
            <p class="footer-desc">
                Delivering secure, scalable, and innovative IT solutions for government agencies and enterprise clients nationwide.
            </p>
        </div>

        <div class="footer-links">
            <h4>Solutions</h4>
            <a href="<?php echo esc_url( home_url( '/government-solutions/defense-intelligence' ) ); ?>">Defense & Intelligence</a>
            <a href="<?php echo esc_url( home_url( '/government-solutions/federal' ) ); ?>">Federal Government</a>
            <a href="<?php echo esc_url( home_url( '/government-solutions/state-local' ) ); ?>">State & Local</a>
            <a href="<?php echo esc_url( home_url( '/enterprise-solutions' ) ); ?>">Enterprise</a>
        </div>

        <div class="footer-links">
            <h4>Company</h4>
            <a href="<?php echo esc_url( home_url( '/about' ) ); ?>">About Us</a>
            <a href="<?php echo esc_url( home_url( '/careers' ) ); ?>">Careers</a>
            <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>">Contact Us</a>
            <a href="<?php echo esc_url( home_url( '/privacy-policy' ) ); ?>">Privacy Policy</a>
        </div>

        <div class="footer-contact">
            <h4>Contact</h4>
            <p>Email: info@govserviceshub.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Washington, D.C. Metro Area</p>
        </div>
    </div>
    
    <div class="container">
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
