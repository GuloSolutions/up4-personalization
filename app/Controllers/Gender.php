<?php
namespace Controllers;

class Gender
{
    const MALE = 'male';

    const FEMALE = 'female';

    const BOTH = 'both';

    private $gender;

    public function __construct($value)
    {
        switch($value) {
            case self::MALE:
            case self::FEMALE:
            case self::BOTH:
                $this->gender = $value;
            break;
            default:
                throw new Exception('No gender defined');
            break;
        }
    }

    public function getGender()
    {
        return $this->gender;
    }

    public function isMale()
    {
        return $this->gender === self::MALE ? true : false;
    }

    public function isFemale()
    {
        return $this->gender === self::FEMALE ? true : false;
    }

    public function isBoth($gender)
    {
        return $this->gender === self::BOTH ? true : false;
    }

    static public function getBoth()
    {
        return self::BOTH;
    }
}
