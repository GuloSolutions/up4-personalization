<?php
namespace Controllers;

class WpPost
{
    /*
     * @return WP_Post
     */
    public static function get($sku)
    {
        global $wp_query;

        $post_type = [
            'products'
        ];

        $args = [
                'posts_per_page' => 1,
                'post_type' => $post_type,
                'meta_key' => 'sku',
                'meta_value' => $sku
            ];

        $wp_query = new \WP_Query($args);

        if ($wp_query->have_posts()) {
            return current($wp_query->posts);
        }

        return false;
    }
}
