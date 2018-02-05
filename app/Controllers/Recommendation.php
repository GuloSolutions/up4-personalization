<?php
namespace Controllers;

class Recommendation
{
    public $productAdult;
    public $productWomens;
    public $productUltra;
    public $productKidsCubes;
    public $productSecondarys;
    public $productHeartHealth;
    public $productSport;
    public $productWomensAdvancedCare;
    public $productAdult50Plus;

    public function __construct()
    {
        $this->productAdult = new ProductAdult();
        $this->productWomens = new ProductWomens();
        $this->productUltra = new ProductUltra();
        $this->productKidsCubes = new ProductKidsCubes();
        $this->productSecondarys = new ProductSecondarys();
        $this->productHeartHealth = new ProductHeartHealth();
        $this->productSport = new ProductSport();
        $this->productWomensAdvancedCare = new ProductWomenAdvancedCare();
        $this->productAdult50Plus = new ProductAdult50Plus();
    }

    public function getProductAdult()
    {
        return $this->productAdult;
    }

    public function getProductWomens()
    {
        return $this->productKidsCubes;
    }
    public function getProductUltra()
    {
        return $this->productSecondarys;
    }
    public function getProductKidsCubes()
    {
        return $this->productHeartHealth;
    }
    public function getProductSecondarys()
    {
        return $this->productWomensAdvancedCare;
    }
    public function getProductHeartHealth()
    {
        return $this->productAdult50Plus;
    }
    public function getProductSport()
    {
        return $this->productAdult50Plus;
    }
    public function ProductWomenAdvancedCare()
    {
        return $this->productAdult50Plus;
    }
    public function getProductAdult50Plus()
    {
        return $this->productAdult50Plus;
    }
}
