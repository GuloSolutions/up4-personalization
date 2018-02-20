<?php
namespace Controllers;

use Controllers\Gender;
use Controllers\Age;

use Controllers\WpPost;

abstract class AbstractProduct
{
    abstract protected function getSku();

    abstract protected function isTravelsOften();

    abstract protected function isExercisesOften();

    abstract protected function hasChildren();

    abstract protected function isUrinary();

    abstract protected function isVaginal();

    abstract protected function isDigestive();

    abstract protected function isImmune();

    abstract protected function isHeart();

    /*
     * @return Gender
     */
    public function getGender()
    {
        return $this->gender;
    }

    /*
     * @return Gender
     */
    public function getAge()
    {
        return $this->age;
    }

    /*
     * @return WpQuery
     */
    public function getPost()
    {
        return WpPost::get($this->getSku());
    }
}
