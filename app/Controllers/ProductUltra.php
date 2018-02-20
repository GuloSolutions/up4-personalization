<?php
namespace Controllers;

use Controllers\Gender;
use Controllers\Age;

class ProductUltra extends AbstractProduct
{
    private const SKU = 40000602266;

    public $gender;
    public $age;


    public function __construct()
    {
        $this->age = new Age(Age::IS2439);
        $this->gender = new Gender(Gender::BOTH);
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
        return (int) 1;
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
        return (int) 1;
    }

    public function isHeart()
    {
        return (int) 0;
    }
}
