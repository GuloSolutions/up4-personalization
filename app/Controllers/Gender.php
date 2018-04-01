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
                $this->gender = null;
            break;
        }
    }

    public function get()
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

    public function isEitherUser()
    {
        return $this->isEither();
    }

    public function isEither()
    {
        return $this->gender === self::BOTH ? true : false;
    }

    public static function getBoth()
    {
        return self::BOTH;
    }
}
