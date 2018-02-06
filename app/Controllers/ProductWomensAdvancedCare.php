<?php
namespace Controllers;

class ProductWomensAdvancedCare extends AbstractProduct
{

    public CONST SKU = 40000600282;

    public $is_primary;

    public function __construct()
    {
        $this->setPrimary(true);
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

    public function getPost(AbstractProduct $product)
    {
        $post = new WpPost();
        return $post->getWpPost($product);
    }
}
