<?php
namespace Controllers;

abstract class AbstractProduct
{
    private $is_primary;

    abstract protected function getGender();

    abstract protected function getAge();

    abstract protected function getSku();

    abstract protected function travelsOften();

    abstract protected function exercisesOften();

    abstract protected function hasChildren();

    abstract protected function urinary();

    abstract protected function vaginal();

    abstract protected function digestive();

    abstract protected function immune();

    abstract protected function health_needs();

    protected function isPrimary()
    {
        return $is_primary ? true : false;
    }

    public function getWpPost()
    {
        return get_post_type_object('products');
    }
}
