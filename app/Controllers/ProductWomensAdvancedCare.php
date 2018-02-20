<?php
namespace Controllers;

use Controllers\Gender;
use Controllers\Age;

class ProductWomensAdvancedCare extends AbstractProduct
{
    private const SKU = 40000600282;

    public $gender;
    public $age;

    public function __construct()
    {
        $this->age = new AGE(AGE::ISALL);
        $this->gender = new Gender(Gender::FEMALE);
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
        return (int) 1;
    }

    public function isDigestive()
    {
        return  (int) 0;
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
