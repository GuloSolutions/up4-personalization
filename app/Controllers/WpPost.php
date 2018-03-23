<?php
namespace Controllers;

use Controllers\ApiCache;

class WpPost
{
    /*
     * set 1 hour expiry
     */
    const CACHE_EXPIRE = 3600;

    /*
     * @param Integer
     * @return WP_Post
     */
    public static function getProduct($sku)
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

        return self::get($args, $sku);
    }

    /*
     * @param String
     * @return WP_Post
     */
    public static function getSegment($title)
    {
        $post_type = [
            'segments'
        ];

        $args = [
                'posts_per_page' => 1,
                'post_type' => $post_type,
                'post_status' => 'publish',
                'title' => $title
            ];

        return self::get($args, $title);
    }

    /*
     * @param Array
     * @param String
     * @return WP_Post
     */
    public static function get($args, $key)
    {
        $cache = new ApiCache(self::CACHE_EXPIRE);

        $post = $cache->getCachedItem($key);

        if ($post === false) {
            $post_query = new \WP_Query($args);

            if ($post_query->have_posts()) {
                $post = current($post_query->posts);
                $cache->saveItemInCache($post);
            }
        }

        return $post;
    }
}
