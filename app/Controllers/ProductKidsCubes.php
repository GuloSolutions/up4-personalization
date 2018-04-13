<?php
namespace Controllers;

use Controllers\Gender;
use Controllers\Age;

class ProductKidsCubes extends AbstractProduct
{
    private const SKU = 40000600391;

    private const RANK = 0;

    public $gender;

    public $age;

    public function __construct()
    {
        $this->gender = new Gender(Gender::BOTH);
        $this->age = new Age(Age::ISKID);

        $this->rank = self::RANK;

        $this->turnOffRecommendation();
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
        return true;
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
