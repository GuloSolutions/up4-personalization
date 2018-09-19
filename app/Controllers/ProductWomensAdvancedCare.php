<?php
namespace Controllers;

use Controllers\Gender;
use Controllers\Age;

class ProductWomensAdvancedCare extends AbstractProduct
{
    private const SKU = 40000600282;

    private const RANK = 7;

    public $gender;

    public $age;

    public function __construct()
    {
        $this->gender = new Gender(Gender::FEMALE);
        $this->age = new Age(AGE::ISALL);

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
        return false;
    }

    public function isUrinary()
    {
        return false;
    }

    public function isVaginal()
    {
        return (int) 1;
    }

    public function isDigestive()
    {
        return  false;
    }

    public function isImmune()
    {
        return false;
    }

    public function isCapsules()
    {
        return true;
    }
}
