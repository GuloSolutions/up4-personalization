<?php
namespace Controllers;

abstract class AbstractProduct
{
    abstract protected function getGender();

    abstract protected function getAge();

    abstract protected function getSku();

    abstract protected function isTravelsOften();

    abstract protected function isExercisesOften();

    abstract protected function hasChildren();

    abstract protected function isUrinary();

    abstract protected function isVaginal();

    abstract protected function isDigestive();

    abstract protected function isImmune();

    abstract protected function isHealthNeeds();

    protected function isPrimary()
    {
        return $is_primary ? true : false;
    }
}
