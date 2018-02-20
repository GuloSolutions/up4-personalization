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
        foreach ($this->products as $p) {
            //female
            if (GENDER::isFemale($this->user->gender) && Age::isALL($p->getAge())) {
                if ($p->isVaginal() == $this->user->vaginal  &&  $p->isDigestive() != $this->user->digestive) {
                    return $this->productWomensAdvancedCare;
                } elseif ($this->user->urinary == $p->isUrinary() && $this->user->digestive == $p->isDigestive() && $this->user->vaginal == $p->isVaginal() && $this->user->immune == $p->isImmune()) {
                    return $this->productWomens;
                } elseif ($this->user->exercises_often == $p->isExercisesOften() && $p->hasChildren() != $this->user->has_children) {
                    return $this->productSport;
                } elseif ($p->hasChildren() == $this->user->has_children) {
                    return $this->productKidsCubes;
                } else {
                    return $this->productAdult;
                }
            } elseif (GENDER::isFemale($this->user->gender) && Age::isBetween24And39($this->user->age)) {
                if ($p->isTravelsOften() == $this->user->travelsOften && $p->isDigestive() == $this->user->digestive  && $p->isImmune() == $this->user->immune) {
                    return $this->productUltra;
                }
            } elseif (GENDER::isFemale($this->user->gender) && Age::isBetween40And60($this->user->age)) {
                if ($p->isHeart() == $this->user->heart) {
                    return $this->productHeartHealth;
                }
            } elseif (GENDER::isFemale($this->user->gender) &&  Age::is50Plus($this->user->age)) {
                if ($p->isDigestive() == $this->user->digestive) {
                    return $this->productAdult50Plus;
                }
            //male
            } elseif (GENDER::isMale($this->user->gender) && Age::isALL($p->getAge())) {
                if ($this->user->digestive == $p->isDigestive() && $p->isImmune() == $this->user->immune && $this->user->travels_often != $p->isTravelsOften() && $this->user->exercises_often != 1 ) {
                    return $this->productAdult;
                } if ( $this->user->exercises_often == $p->isExercisesOften()) {
                    return $this->productSport;
                } else {
                    return $this->productAdult;
                }
            } elseif (GENDER::isMale($this->user->gender) && Age::isBetween24And39($this->user->age)) {
                if ($this->user->digestive == $p->isDigestive() && $this->user->travels_often == $p->isTravelsOften() && $this->user->immune == $p->isImmune()) {
                    return $this->productUltra;
                }
            } elseif(GENDER::isMale($this->user->gender) && Age::is50Plus($this->user->age)){
                 if ($this->user->digestive == $p->isDigestive()) {
                    return $this->productAdult50Plus;
                }
            } elseif (GENDER::isMale($this->user->gender) && Age::isBetween40And60($this->user->age)){
                 if ($this->user->heart == $p->isHeart()) {
                    return $this->productHeartHealth;
                }

            } elseif(GENDER::isMale($this->user->gender) && Age::isBetween50Plus($this->user->age)){
                 if ($this->user->digestive == $p->isDigestive()) {
                    return $this->productAdult50Plus;
                }
            }
        }
        return $this->productAdult;
    }

    private function getFacebookProductMatch()
    {
        foreach ($this->products  as $p) {
            if ((GENDER::isFemale($this->user->gender) || GENDER::isMale($this->user->gender)) && Age::isALL($p->getAge())) {
                if (Age::isBetween24And39($this->user->age) || Age::isLessThan24($this->user->age)) {
                    return $this->productAdult;
                } elseif (Age::isBetween40And60($this->user->age)) {
                    return $this->productHeartHealth;
                } elseif (Age::is50Plus($this->user->age)) {
                    return $this->productAdult50Plus;
                } else {
                    $this->processFurtherOptions();
                }
            }
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
