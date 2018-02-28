<?php
namespace Controllers;

use Controllers\Gender;
use Controllers\Age;

class ProductSport extends AbstractProduct
{
    private const SKU = 40000600541;

    private const RANK = 6;

    public $gender;

    public $age;

    public function __construct()
    {
        $this->age = new Age(Age::ISALL);
        $this->gender = new Gender(Gender::BOTH);

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
        return true;
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
        return  false;
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
