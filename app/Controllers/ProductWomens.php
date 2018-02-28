<?php
namespace Controllers;

use Controllers\Gender;
use Controllers\Age;

class ProductWomens extends AbstractProduct
{
    private const SKU = 725334011330;

    private const RANK = 2;

    public $gender;

    public $age;

    public function __construct()
    {
        $this->age = new Age(Age::ISALL);
        $this->gender = new Gender(Gender::FEMALE);

        $this->rank = self::RANK;
    }

    public function getGender()
    {
        return $this->gender;
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
        return true;
    }

    public function isVaginal()
    {
        return true;
    }

    public function isDigestive()
    {
        return  true;
    }

    public function isImmune()
    {
        return true;
    }

    public function isHeart()
    {
        return false;
    }
}
