<?php
namespace Controllers;

use Controllers\AbstractProduct;

class WpPost
{
    public function getWpPost($sku)
    {
        global $wp_query;

        $post_type = [
             'products',
            ];

        $args = [
                'post_type' => $post_type,
                'meta_key' => 'sku',
                'meta_value' => $sku
            ];

        $wp_query = new \WP_Query($args);

        return $wp_query;
    }
}
