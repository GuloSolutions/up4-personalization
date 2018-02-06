<?php
namespace Controllers;

class Recommendation
{
    public $productAdult;
    public $productWomens;
    public $productUltra;
    public $productKidsCubes;
    public $productHeartHealth;
    public $productSport;
    public $productWomensAdvancedCare;
    public $productAdult50Plus;
    public $instance;

    public function __construct()
    {
        $this->productAdult = new ProductAdult();
        $this->productWomens = new ProductWomens();
        $this->productUltra = new ProductUltra();
        $this->productKidsCubes = new ProductKidsCubes();
        // $this->productHeartHealth = new ProductHeartHealth();
        // $this->productSport = new ProductSport();
        // $this->productWomensAdvancedCare = new ProductWomenAdvancedCare();
        // $this->productAdult50Plus = new ProductAdult50Plus();
        // $this->checkIfPrimaryProduct();
    }

    public function getProductAdult()
    {
        return $this->productAdult;
    }
    public function getProductWomens()
    {
        return $this->productWomens;
    }
    public function getProductUltra()
    {
        return $this->productUltra;
    }
    public function getProductKidsCubes()
    {
        return $this->productKidsCubes;
    }
    public function getProductHeartHealth()
    {
        return $this->productHeartHealth;
    }
    public function getProductSport()
    {
        return $this->productSport;
    }
    public function ProductWomenAdvancedCare()
    {
        return $this->productWomensAdvancedCare;
    }
    public function getProductAdult50Plus()
    {
        return $this->productAdult50Plus;
    }
    // public function checkIfPrimaryProduct()
    // {
    //     // $recommendation_args = [$value1, $value2, $value3, $value4];
    //     $ref_class = new \ReflectionClass();
    //     $this->instance = $ref_class->newInstanceArgs();
    //     // foreach ($this->instance as $instance) {
    //     //     if ($instance->is_primary === true){

    //     //         return $instance;

    //     //     }
    //     // }

    //     return $this->instance;
    // }

    public function getPrimary()
    {
        return $this->instance;
    }
}
