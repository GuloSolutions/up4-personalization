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
        return (int) 0;
    }

    public function isExercisesOften()
    {
        return (int) 0;
    }

    public function hasChildren()
    {
        return (int) 0;
    }

    public function isUrinary()
    {
        return (int) 0;
    }

    public function isVaginal()
    {
        return (int) 0;
    }

    public function isDigestive()
    {
        return  (int) 1;
    }

    public function isImmune()
    {
        return (int) 0;
    }

    public function isHeart()
    {
        return (int) 0;
    }
}

