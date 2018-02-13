<?php
namespace Controllers;

class ProductSport extends AbstractProduct
{
    private const SKU = 40000600541;

    public function __construct()
    {
        $this->setPrimary(true);

        $this->gender = new Gender(Gender::BOTH);
    }

    public function getAge()
    {
        return "24-29";
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
}
