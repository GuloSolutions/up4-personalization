<?php
namespace Controllers;

class Age
{
    const IS2439 = array(24, 39);

    const IS4060 = array(40, 60);

    const IS50PLUS = array(50, 55);

    const ISALL = 'NOTRELEVANT';

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
        return $value < self::IS2439[0] ? (int) 1  : (int) 0;
    }

    public static function isBetween24And39($value)
    {
        return $value >= 24 && $value <= 39 ? (int) 1  : (int) 0;
    }

    public static function isBetween40And60($value)
    {
        return $value >= self::IS4060[0] && $value <= self::IS4060[1] ? (int) 1  : (int) 0;
    }

    public static function is50plus($value)
    {
        return $value >= self::IS50PLUS[0] && $value <= self::IS50PLUS[0] ? (int) 1  : (int) 0;
    }
    public static function isAll($value)
    {
        return $value >= self::ISALL ? (int) 1  : (int) 0;
    }
}
