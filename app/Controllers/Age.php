<?php
namespace Controllers;

class Age
{
    const IS2439 = array(24, 39);

    const IS4060 = array(40, 60);

    const IS50PLUS = array(50, 100);

    const ISKID = array(1, 12);

    const ISALL = array(0, 100);

    const UNDEF = [];

    private $age;

    public function __construct($value)
    {
        if(is_numeric($value)) {
            $this->age = $value;
        } else {
            switch ($value) {
                case self::IS2439:
                case self::IS4060:
                case self::IS50PLUS:
                case self::ISKID:
                case self::ISALL:
                    $this->type = $value;
                    $this->age = current($value);
                break;
                default:
                    $this->age = null;
                break;
            }
        }
    }

    public function find($age)
    {
        if($age >= current(self::IS2439) && $age <= self::IS2439[1]) {
            $type[] = self::IS2439;
        }

        if($age >= current(self::IS4060) && $age <= self::IS4060[1]) {
            $type[] = self::IS4060;
        }

        if($age >= current(self::IS50PLUS) && $age <= self::IS50PLUS[1]) {
            $type[] = self::IS50PLUS;
        }

        if($age >= current(self::ISKID) && $age <= self::ISKID[1]) {
            $type[] = self::ISKID;
        }

        if($age >= current(self::ISALL) && $age <= self::ISALL[1]) {
            $type[] = self::ISALL;
        } else {
            $type[] = self::UNDEF;
        }

        return $type;
    }

    public function get()
    {
        if ($this->isLessThan24()) {
            return self::IS2439;
        } elseif ($this->isBetween24And39()) {
            return self::IS2439;
        } elseif ($this->isBetween40And60()) {
            return self::IS4060;
        } elseif ($this->is50plus()) {
            return self::IS50PLUS;
        } elseif ($this->isAll()) {
            return self::ISALL;
        } else {
            return self::UNDEF;
        }
    }

    public function getType()
    {
        return $this->type;
    }

    public function isLessThan24()
    {
        return $this->age > 0 && $this->age < self::IS2439[0] ? true : false;
    }

    public function isBetween24And39()
    {
        return $this->age >= self::IS2439[0] && $this->age <= self::IS2439[1] ? true : false;
    }

    public function isBetween40And60()
    {
        return $this->age >= self::IS4060[0] && $this->age <= self::IS4060[1] ? true : false;
    }

    public function is50plus()
    {
        return $this->age >= self::IS50PLUS[0] && $this->age <= self::IS50PLUS[1] ? true : false;
    }

    public function isAll()
    {
        return $this->age == self::ISALL[0] ? true : false;
    }
}
