<?php
namespace Controllers;

class Age
{
    const IS2439 = array(24, 39);

    const IS4060 = array(40, 60);

    const IS50PLUS = array(50, 55);

    const ISALL = array(0, 100);


    private $age;

    public function __construct($value)
    {
        switch ($value) {
            case self::IS2439:
            case self::IS4060:
            case self::IS50PLUS:
            case self::ISALL:
                $this->age = $value;
            break;
            default:
                throw new Exception('No age defined');
            break;
        }
    }

    public function getAge()
    {
        return $this->age;
    }

    public static function isLessThan24($value)
    {
        return ($value < self::IS2439[0]) ? true : false;
    }

    public static function isBetween24And39($value)
    {
        return ($value >= self::IS2439[0] && $value <= self::IS2439[0]) ? true : false;
    }

    public static function isBetween40And60($value)
    {
        return ($value >= self::IS4060[0] && $value <= self::IS4060[1]) ? true : false;
    }

    public static function is50plus($value)
    {
        return $value >= self::IS50PLUS[0] && $value <= self::IS50PLUS[0] ? true: false;
    }
}
