<?php
namespace Controllers;

class ProductUltra extends AbstractProduct
{

    public CONST SKU = 40000601436;

    public $is_primary;

    public function __construct()
    {
        $this->setPrimary(false);
    }

    public function getGender()
    {
        return 'both';
    }

    public function getAge()
    {
        return "24-29";
    }

    public function getSku()
    {
        return self::ADULTSKU;
    }

    public function travelsOften()
    {
        return false;
    }

    public function exercisesOften()
    {
        return false;
    }

    public function hasChildren()
    {
        return false;
    }

    public function urinary()
    {
        return false;
    }

    public function vaginal()
    {
        return false;
    }

    public function digestive()
    {
        return true;
    }

    public function immune()
    {
        return true;
    }

    public function health_needs()
    {
        return false;
    }

    public function isPrimary()
    {
        return $is_primary ? true : false;
    }

    public function getWpPost()
    {
        return get_post_type_object('products');
    }

    public function setPrimary(bool $value)
    {
        $this->is_primary = $value;
    }
}
