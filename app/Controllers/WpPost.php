<?php
namespace Controllers;

class WpPost
{
    /*
     * @return WP_Post
     */
    public static function get($sku)
    {
        $post_type = [
            'products'
        ];

        $args = [
                'posts_per_page' => 1,
                'post_type' => $post_type,
                'post_status' => 'publish',
                'meta_key' => 'sku',
                'meta_value' => $sku
            ];

        $post_query = new \WP_Query($args);

        if ($post_query->have_posts()) {
            return current($post_query->posts);
        }

        return false;
    }
}
