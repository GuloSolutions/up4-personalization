<?php
namespace Controllers;

class ProductAdult50Plus extends AbstractProduct
{

    public CONST SKU = 40000600291;

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
        return 50;
    }

    public function getSku()
    {
        return self::SKU;
    }

    public function isTravelsOften()
    {
        return false;
    }

    public function isExercisesOften()
    {
        return false;
    }

    public function hasChildren()
    {
        return false;
    }

    public function isUrinary()
    {
        return false;
    }

    public function isVaginal()
    {
        return false;
    }

    public function isDigestive()
    {
        return true;
    }

    public function isImmune()
    {
        return true;
    }

    public function isHealthNeeds()
    {
        return false;
    }

    public function isPrimary()
    {
        return $is_primary ? true : false;
    }

    public function setPrimary(bool $value)
    {
        $this->is_primary = $value;
    }

    public function getPost($product)
    {
        $post = new WpPost();
        return $post->getWpPost($product);
    }
}
