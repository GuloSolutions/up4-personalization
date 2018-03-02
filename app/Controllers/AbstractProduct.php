<?php
namespace Controllers;

use Controllers\Gender;
use Controllers\Age;

use Controllers\WpPost;

abstract class AbstractProduct
{
    protected $rank;

    protected $score;

    abstract public function getSku();

    abstract public function isTravelsOften();

    abstract public function isExercisesOften();

    abstract public function hasChildren();

    abstract public function isUrinary();

    abstract public function isVaginal();

    abstract public function isDigestive();

    abstract public function isImmune();

    abstract public function isHeart();

    /*
     * @return Void
     */
    public function score()
    {
        $this->score++;
    }

    /*
     * @return Int
     */
    public function getScore()
    {
        return $this->score;
    }

    /*
     * @return Int
     */
    public function getRank()
    {
        return $this->rank;
    }

    /*
     * @return Gender
     */
    public function getGender()
    {
        return $this->gender;
    }

    /*
     * @return Age
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
