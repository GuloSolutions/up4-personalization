<?php
namespace Controllers;

use Controllers\Gender;
use Controllers\WpPost;

abstract class AbstractProduct
{
    protected $is_primary;

    abstract protected function getAge();

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
        return $this->gender();
    }

    /*
     * @return WpQuery
     */
    public function getPost()
    {
        return WpPost::get($this->getSku());
    }
}
