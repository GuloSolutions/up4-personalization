<?php
namespace Controllers;

class ProductAdult extends AbstractProduct
{

    // public CONST ADULTSKU = ;

    public $is_primary;

    public function __construct()
    {
        $this->setPrimary(true);
    }

    public function getGender()
    {
    }

    public function getAge()
    {
    }

    public function getSku()
    {
    }

    public function travelsOften()
    {
    }

    public function exercisesOften()
    {
    }

    public function hasChildren()
    {
    }

    public function urinary()
    {
    }

    public function vaginal()
    {
    }

    public function digestive()
    {
    }

    public function immune()
    {
    }

    public function health_needs()
    {
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
