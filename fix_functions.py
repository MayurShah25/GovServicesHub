import os
import re

theme_dir = r'c:\Users\kewal\GSH\wordpress-theme\govserviceshub'
functions_path = os.path.join(theme_dir, 'functions.php')

with open(functions_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the broken function
new_func = """
// Auto-create pages on theme activation
function gsh_auto_create_pages() {
    $pages = array(
        'Home' => 'front-page.php',
        'About Us' => 'page-about.php',
        'Contact Us' => 'page-contact.php',
        'Services' => 'page-services.php',
        'Careers' => 'page-careers.php',
        'Government Solutions' => 'page-government-solutions.php',
        'Enterprise Solutions' => 'page-enterprise-solutions.php',
        'Defense & Intelligence' => 'page-defense-intelligence.php',
        'Federal Government' => 'page-federal-government.php',
        'State, County & Education' => 'page-state-county-education.php'
    );

    foreach ( $pages as $page_title => $page_template ) {
        $page_check = get_page_by_title( $page_title );
        if ( ! isset( $page_check->ID ) ) {
            $new_page_id = wp_insert_post( array(
                'post_title'     => $page_title,
                'post_type'      => 'page',
                'post_status'    => 'publish',
                'post_author'    => 1,
            ) );
            if ( $new_page_id && ! empty( $page_template ) ) {
                update_post_meta( $new_page_id, '_wp_page_template', $page_template );
            }
            
            // Set Home as front page
            if ( $page_title == 'Home' ) {
                update_option( 'show_on_front', 'page' );
                update_option( 'page_on_front', $new_page_id );
            }
        }
    }
}
add_action( 'after_switch_theme', 'gsh_auto_create_pages' );
"""

# replace from '// Auto-create pages' to the end of file
content = re.sub(r'// Auto-create pages on theme activation.*', new_func.strip(), content, flags=re.DOTALL)

with open(functions_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed functions.php")
