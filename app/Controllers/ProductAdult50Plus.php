<?php
namespace Controllers;

use Controllers\Gender;
use Controllers\Age;

class ProductAdult50Plus extends AbstractProduct
{
    private const SKU = 40000600291;

    public $gender;
    public $age;


    public function __construct()
    {
        $this->gender = new Gender(Gender::BOTH);
        $this->age = new Age(Age::IS50PLUS);
    }

    public function getAge()
    {
        return $this->age;
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
        return false;
    }

    public function isHeart()
    {
        return false;
    }
}
