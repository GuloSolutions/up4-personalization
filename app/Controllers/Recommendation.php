<?php
namespace Controllers;

use Controllers\Gender;

class Recommendation
{
    /*
     * @param Up4
     */
    public $up4;
    public $user;

    /*
     * @param Array of Abstract Products
     */
    private $products;

    public function __construct(\Controllers\Up4 $up4)
    {
        $cwd = dirname(__FILE__);

        $files = glob($cwd . '/[Product]*.php');

        foreach ($files as $className) {
            $subfolders = explode('/', $className);
            $classFilename = end($subfolders);
            $a = '\namespacename\classname';

            $className = substr($classFilename, 0, -4);
            $camelCaseClassName = lcfirst($className);

            $classNameNamespace = sprintf('\Controllers\%s', $className);

            $this->products[$camelCaseClassName] = new $classNameNamespace;
        }

        $this->up4 = $up4;

        $this->user = $this->up4->up4User;
    }

    public function __get($name)
    {
        if (is_object($this->products[$name]) && method_exists($this->products[$name], 'getPost')) {
            return $this->products[$name]->getPost();
        }
    }

    public function getUserRecommendation()
    {
        //user is a Models user not an up4User hence no access to isSurveyTaken()
        if (!isset($this->user->travelsOften)) {
            return $this->getSurveyProductMatch();
        } else {
            return $this->getFacebookProductMatch();
        }
    }

    private function getSurveyProductMatch()
    {
        if (!is_null($this->user->age) && ($this->user->gender == Gender::FEMALE || $this->user->gender == Gender::MALE)) {
            if (Age::isBetween24And39($this->user->age)) {
                foreach ($this->products as $p) {
                    if ($p->isDigestive() == $this->user->digestive && $p->isImmune() == $this->user->immune) {
                        return $this->productAdult;
                    } elseif ($p->isTravelsOften() == $this->user->travelsOften && $p->isDigestive() == $this->user->digestive  && $p->isImmune() == $this->user->immune) {
                        return $this->productUltra;
                    } elseif ($this->user->hasChildren == true) {
                        return $this->productKidsCubes;
                    }
                }
            } elseif (Age::isBetween40And60($this->user->age)) {
                foreach ($this->products as $p) {
                    if ($p->isHeart() == $this->user->heart) {
                        return $this->productHeartHealth;
                    }
                }
            } elseif (Age::is50Plus($this->user->age)) {
                foreach ($this->products as $p) {
                    if ($p->isDigestive() == $this->user->digestive) {
                        return $this->productAdult50Plus;
                    }
                }
            } else {
                foreach ($this->products as $p) {
                    if ($p->isExercisesOften() == $this->user->exercisesOften) {
                        return $this->productSport;
                    }
                }
            }
        } elseif (!is_null($this->user->age) && $this->user->gender == Gender::FEMALE) {
            if (Age::isBetween24And39($this->user->age)) {
                foreach ($this->products as $p) {
                    if ($this->user->exercisesOften == $p->isExercisesOften() && $this->user->urinary == $p->isUrinary()
                        && $this->user->vaginal == $p->isVaginal() && $this->user->immune == $p->isImmune()) {
                        return $this->productWomens;
                    }
                }
            }
        } elseif (Age::isBetween24And39($this->user->age) || Age::isBetween40And60($this->user->age) || Age::isLessThan24($this->user->age)) {
            foreach ($this->products as $p) {
                if ($p->isVaginal() == $this->user->vaginal) {
                    return $this->productWomenAdvancedCare;
                }
            }
        }

        return $this->productAdult;
    }

    private function getFacebookProductMatch()
    {
        if (!is_null($this->user->age) && ($this->user->gender == Gender::BOTH)) {
            if (Age::isBetween24And39($this->user->age) || Age::isLessThan24($this->user->age)) {
                return $this->productAdult;
            } elseif (Age::isBetween40And60($this->user->age)) {
                return $this->productHeartHealth;
            } elseif (Age::is50Plus($this->user->age)) {
                return $this->productAdult50Plus;
            } else {
                $this->processFurtherOptions();
            }
        } elseif (!is_null($this->user->age) && $this->user->gender == Gender::FEMALE) {
            if (Age::isBetween24And39($this->user->age)) {
                return $this->productWomens;
            }
        } elseif (is_null($this->user->age) && $this->user->gender == Gender::FEMALE) {
            return $this->productWomenAdvancedCare;
        }
        return $this->processFurtherOptions();
    }
    // randomize Facebook results
    private function processFurtherOptions()
    {
        $a = rand(10, 100);
        $b = rand(10, 100);

        if ($a < $b) {
            return $this->productUltra;
        } elseif ($a = $b) {
            return $this->productAdult;
        } else {
            return $this->productSport;
        }
    }
}
