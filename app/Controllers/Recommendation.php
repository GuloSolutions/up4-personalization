<?php
namespace Controllers;

use Controllers\Gender;

class Recommendation
{
    /*
     * @param Up4
     */
    public $up4;

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
        if ($this->up4->isSurveyTaken()) {
            return $this->getSurveyProductMatch();
        } else {
            return $this->getFacebookProductMatch();
        }
    }

    private function getSurveyProductMatch()
    {
        if ($this->user->age == 50 && $this->user->digestive == true) {
            return $this->productAdult50Plus;
        } elseif ($this->user->gender === Gender::FEMALE && $this->user->vaginal == true) {
            return $this->productWomenAdvancedCare;
        } elseif ($this->user->age == 30 && $this->user->gender === Gender::FEMALE) {
            return $this->productWomens;
        } elseif ($this->user->age == 45 || $this->user->age == 50 && $this->user->heart == true) {
            return $this->productHeartHealth;
        } elseif ($this->user->has_children == true) {
            return $this->processFurtherOptions();
        } elseif ($this->user->exercises_often == true && $this->user->age  == 20 || $this->user->age == 30 || $this->user->age = 40 || $this->user->age == 50) {
            return $this->productSport;
        } else {
            return $this->processFurtherOptions();
        }
    }

    private function getFacebookProductMatch()
    {
        // needs to be adjusted
        if ($this->user->age == 50) {
            return $this->productAdult50Plus;
        } elseif ($this->user->gender === Gender::FEMALE && $this->user->vaginal == true) {
            return $this->productWomenAdvancedCare;
        } elseif ($this->user->age == 30 && $this->user->gender === Gender::FEMALE) {
            return $this->productWomens;
        } elseif ($this->user->age == 45 || $this->user->age == 50 && $this->user->heart == true) {
            return $this->productHeartHealth;
        } elseif ($this->user->hasChildren == true) {
            return $this->processFurtherOptions();
        } elseif ($this->user->exercisesOften == true) {
            return $this->productSport;
        }
    }

    // assign rank to cases that do not fall in those  above
    // to be adjusted
    private function processFurtherOptions()
    {
        if ($this->user->age == 30) {
            return $this->productAdult;
        } else {
            return $this->productAdult;
        }
    }
}
