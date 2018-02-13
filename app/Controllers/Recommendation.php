<?php
namespace Controllers;

class Recommendation
{
    public $productAdult;

    public $productWomens;

    public $productUltra;

    public $productKidsCubes;

    public $productHeartHealth;

    public $productWomensAdvancedCare;

    public $productAdult50Plus;

    public $user;


    public function __construct(\Models\Up4User $up4User)
    {

        //THIS CLASS INSTANTIATION DOES NOT WORK

        // $cwd = dirname(__FILE__);
        // $files = glob($cwd . '/[Product]*.php');

        // foreach ($files as $className) {
        //     $className = explode('/', $className, 7);

        //     $classNameClean = substr($className[6], 0, -4);

        //     $camelCaseClassName = lcfirst((string) $classNameClean);

        //     $this->{$camelCaseClassName} = new Controllers\{$classNameClean};
        // }

        $this->user = $up4User;

        $this->productWomens = new ProductWomens();

        $this->productAdult = new ProductAdult();

        $this->productUltra = new ProductUltra();

        $this->productKidsCubes = new ProductKidsCubes();

        $this->productHeartHealth = new ProductHeartHealth();

        $this->productWomensAdvancedCare = new ProductWomensAdvancedCare();

        $this->productAdult50Plus = new ProductAdult50Plus();

        $this->productSport = new ProductSport();

    }

    public function getProductAdult()
    {
        $sku = $this->productAdult->getSku();
        return $this->productAdult->getPost($sku);
    }
    public function getProductWomens()
    {
        $sku = $this->productWomens->getSku();
        return $this->productWomens;
    }
    public function getProductUltra()
    {
        $sku = $this->productUltra->getSku();
        return $this->productUltra->getPost($sku);
    }
    public function getProductKidsCubes()
    {
        $sku = $this->productKidsCubes->getSku();
        return $this->productKidsCubes->getPost($sku);
    }
    public function getProductHeartHealth()
    {
        $sku = $this->productHeartHealth->getSku();
        return $this->productHeartHealth->getPost($sku);
    }
    public function getProductSport()
    {
        $sku = $this->productSport->getSku();
        return $this->productSport->getPost($sku);
    }
    public function getProductWomenAdvancedCare()
    {
        $sku = $this->productWomensAdvancedCare->getSku();
        return $this->productWomensAdvancedCare->getPost($sku);
    }
    public function getProductAdult50Plus()
    {
        $sku = $this->productAdult50Plus->getSku();
        return $this->productAdult50Plus->getPost($sku);
    }

    public function getUserRecommendation()
    {
        if ($this->user->facebook_id !== null) {
            return $this->getFacebookProductMatch();
        } else {
            return $this->getSurveyProductMatch();
        }
    }

    public function getSurveyProductMatch()
    {
        if ($this->user->age == 50 && $this->user->digestive == true) {
            return $this->getProductAdult50Plus();
        } elseif ($this->user->gender == 'female' && $this->user->vaginal == true) {
            return $this->getProductWomenAdvancedCare();
        } elseif ($this->user->age == 30 && $this->user->gender == 'female') {
            return $this->getProductWomens();
        } elseif ($this->user->age == 45 || $this->user->age == 50 && $this->user->heart == true) {
            return $this->getProductHeartHealth();
        } elseif ($this->user->hasChildren == true) {
            return $this->processFurtherOptions();
        } elseif ($this->user->exercisesOften == true && $this->user->age  == 20 || $this->user->age == 30 || $this->user->age = 40 || $this->user->age == 50  ) {
            return $this->getProductSport();
        }
        else {
            return $this->processFurtherOptions();
        }
    }

    public function getFacebookProductMatch()
    {
        //needs to be adjusted
        if ($this->user->age == 50) {
            return $this->getProductAdult50Plus();
        } elseif ($this->user->gender == 'female' && $this->user->vaginal == true) {
            return $this->getProductWomenAdvancedCare();
        } elseif ($this->user->age == 30 && $this->user->gender == 'female') {
            return $this->getProductWomens();
        } elseif ($this->user->age == 45 || $this->user->age == 50 && $this->user->heart == true) {
            return $this->getProductHeartHealth();
        } elseif ($this->user->hasChildren == true) {
            return $this->processFurtherOptions();
        } elseif ($this->user->exercisesOften == true) {
            return $this->getProductSport();
        }
    }
    //assign rank to cases that do not fall in those  above
    //to be adjusted
    public function processFurtherOptions()
    {
        if ($this->user->age == 30){
            return $this->getProductAdult();
        }
    }
}
