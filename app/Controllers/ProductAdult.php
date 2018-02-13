<?php
namespace Controllers;

use Controllers\WpPost;
use Controllers\Gender;

class ProductAdult extends AbstractProduct
{
    private const SKU = 40000601436;

    public $gender;

    public function __construct()
    {
        $this->setPrimary(true);

        $this->gender = new Gender(Gender::BOTH);
    }

    public function getAge()
    {
        return 30;
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

    public function setPrimary(bool $value)
    {
        $this->is_primary = $value;
    }
}
