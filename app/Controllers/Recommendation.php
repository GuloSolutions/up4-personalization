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

    /*
     * @return Controllers\AbstractProduct
     */
    public function getUserRecommendation()
    {
        $this->recommendations = $this->filterRecommendationsByGenderAndAge();

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
                    if (isset($sec_getter) &&
                        method_exists($objA, $sec_getter) &&
                            method_exists($objB, $sec_getter)) {
                        if ($objA->$sec_getter() !== false &&
                                    $objB->$sec_getter() !== false) {
                            return $objA->$sec_getter() - $objB->$sec_getter();
                        } else {
                            return;
                        }
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

    /*
     * @return Array of Abstract Products
     */
    private function filterRecommendationsByGenderAndAge()
    {
        $recommendations = [];

        $age = $this->user->age;
        $userAge = new Age($this->user->age);

        foreach ($this->products as $key => $product) {
            if ($product->isRecommendation() !== false) {
                if ($product->getGender()->get() === $this->user->gender ||
                        $product->getGender()->isEither()) {
                    $recommendations[$key] = $product;
                } elseif (in_array($product->getAge()->getType(), $product->getAge()->find($age))) {
                    $recommendations[$key] = $product;
                }
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
        foreach ($this->recommendations as $name => $product) {
            if ($product->isTravelsOften() && $product->isTravelsOften() == $this->user->travels_often) {
                $product->score();
            }

            if ($product->isExercisesOften() && $product->isExercisesOften() == $this->user->exercises_often) {
                $product->score();
            }

            if ($product->hasChildren() && $product->hasChildren() == $this->user->has_children) {
                $product->score();
            }

            if ($product->isUrinary() && $product->isUrinary() == $this->user->urinary) {
                $product->score();
            }

            if ($product->isDigestive() && $product->isDigestive() == $this->user->digestive) {
                $product->score();
            }

            if ($product->isVaginal() && $product->isVaginal() == $this->user->vaginal) {
                $product->score();
            }

            if ($product->isImmune() && $product->isImmune() == $this->user->immune) {
                $product->score();
            }

            if ($product->isHeart() && $product->isHeart() == $this->user->heart) {
                $product->score();
            }
        }
    }
}
