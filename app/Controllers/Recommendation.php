<?php
namespace Controllers;

use Controllers\Gender;

class Recommendation
{
    /*
     * @param Controllers/Up4
     */
    public $up4;

    /*
     * @param Models/Up4User
     */
    public $user;

    /*
     * @param Array of Abstract Products
     */
    private $products = [];

    /*
     * @param Array of Abstract Products Recs
     */
    private $recommendations = [];

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
        $gender_recommendations = $this->filterRecommendationsByGender();

        $age_recommendations = $this->filterRecommendationsByAge();

        $this->recommendations = array_intersect_key($gender_recommendations, $age_recommendations);

        $this->scoreAttributes();

        $this->sortRecommendationsBy('score', 'rank');

        return current($this->recommendations);
    }

    private function sortRecommendationsBy($primary, $secondary = null)
    {
        $getter = 'get' . ucfirst($primary);

        if ($secondary) {
            $sec_getter = 'get' . ucfirst($secondary);
        }

        $sorter = function ($objA, $objB) use ($getter, $sec_getter) {
            if (method_exists($objA, $getter)) {
                if ($objA->$getter() == $objB->$getter()) {
                    if (isset($sec_getter)) {
                        return $objA->$sec_getter() - $objB->$sec_getter();
                    } else {
                        return 0;
                    }
                }

                if (isset($sec_getter)) {
                    return ($objA->$getter() < $objB->$getter()) ? 1 : -1;
                } else {
                    return ($objA->$getter() > $objB->$getter()) ? 1 : -1;
                }
            }
        };

        usort($this->recommendations, $sorter);
    }

    private function filterRecommendationsByGender()
    {
        $recommendations = [];

        foreach ($this->products as $key => $p) {
            if ($p->getGender()->get() === $this->user->gender ||
                    $p->getGender()->isEither()) {
                $recommendations[$key] = $p;
            }
        }

        return $recommendations;
    }

    private function filterRecommendationsByAge()
    {
        $recommendations = [];

        $age = $this->user->age;
        $userAge = new Age($this->user->age);

        foreach ($this->products as $key => $p) {
            if (in_array($p->getAge()->getType(), $p->getAge()->find($age))) {
                $recommendations[$key] = $p;
            }
        }

        return $recommendations;
    }

    /*
     * Score an attribute for a product
     * if the product attribute is true
     * and the user matches the product attribute
     * @return Void
     */
    private function scoreAttributes()
    {
        foreach ($this->recommendations as $p) {
            if ($p->isTravelsOften() && $p->isTravelsOften() == $this->user->travels_often) {
                $p->score();
            }

            if ($p->isExercisesOften() && $p->isExercisesOften() == $this->user->exercises_often) {
                $p->score();
            }

            if ($p->hasChildren() && $p->hasChildren() == $this->user->has_children) {
                $p->score();
            }

            if ($p->isUrinary() && $p->isUrinary() == $this->user->urinary) {
                $p->score();
            }

            if ($p->isDigestive() && $p->isDigestive() == $this->user->digestive) {
                $p->score();
            }

            if ($p->isVaginal() && $p->isVaginal() == $this->user->vaginal) {
                $p->score();
            }

            if ($p->isImmune() && $p->isImmune() == $this->user->immune) {
                $p->score();
            }

            if ($p->isHeart() && $p->isHeart() == $this->user->heart) {
                $p->score();
            }
        }
    }
}
