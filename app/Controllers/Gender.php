<?php
namespace Controllers;

class Gender
{
    const MALE = 'male';

    const FEMALE = 'female';

    const BOTH = 'both';

    public $gender;

    public function __construct($value)
    {
        $this->gender = $value;
    }

    public function getGender()
    {
        return $this->gender;
    }

    public function isMale()
    {
        return $this->gender == 'MALE' ? true : false;
    }

    public function isFemale()
    {
        return $this->gender == 'FEMALE' ? true : false;
    }

    static public function isBoth($gender)
    {
        if ($gender == self::BOTH) {
            return true;
        }

        return false;
    }

    static public function getBoth()
    {
        return self::BOTH;
    }
}
