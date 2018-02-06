<?php
namespace Controllers;

class Gender
{
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
}
