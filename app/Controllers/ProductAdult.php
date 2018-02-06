<?php
namespace Controllers;

use Controllers\WpPost;
use Controllers\Gender;


class ProductAdult extends AbstractProduct
{

    public CONST SKU = 40000601436;
    public CONST GENDER = 'MF';

    public $is_primary;

    public $gender;

    public function __construct()
    {
        $this->setPrimary(true);
    }

    public function getGender()
    {
        $gender_helper = new Gender(self::GENDER);

        return $gender_helper->getGender();
    }

    public function getAge()
    {
        return 20;
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
