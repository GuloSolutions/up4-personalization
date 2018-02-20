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
        switch ($value) {
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

    public static function isMale($gender)
    {
        return $gender == self::MALE ? true : false;
    }

    public static function isFemale($gender)
    {
        return $gender == self::FEMALE ? true : false;
    }

    public static function isEitherUser($gender)
    {
        return $gender == self::MALE  || $gender == self::FEMALE  ? true : false;
    }

    public static function isEither($gender)
    {
        return $gender == self::BOTH ? true : false;
    }

    public static function getBoth()
    {
        return self::BOTH;
    }
}
