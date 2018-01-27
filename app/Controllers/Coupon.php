<?php
namespace Controllers;

use Illuminate\Database\Eloquent\Model as Model;
use Models\User;
use Models\Up4User;


class Coupon
{

    //provided by Coupons.com
    private $checkCode;

    public function encodeRequest ($pinCode, $offerCode, $shortKey, $longKey)
    {
        $decodeX = " abcdefghijklmnopqrstuvwxyz0123456789!$%()*+,-.@;<=>?[]^_{|}~";
        $encodeModulo = array_fill(0, 256, 0);
        $vob[0] = $offerCode % 100;
        $vob[1] = ($offerCode / 100) % 100;

        for ($i = 0; $i < 61; $i++)
            $encodeModulo[substr($decodeX, $i, 1)] = $i;
            $pinCode = strtolower($pinCode) . strval($offerCode);
        if (strlen($pinCode) < 20){
            $pinCode .= ' couponsincproduction';
            $pinCode = substr($pinCode, 0, 20);
        }

        $q = 0;
        $j = strlen($pinCode);
        $k = strlen($shortKey);
        $s1 = $s2 = $s3 = null;
        $cpt = '';

        for ($i = 0; $i < $j; $i++){
            $s1 = $encodeModulo[substr($pinCode, $i, 1)];
            $s2 = 2 * $encodeModulo[substr($shortKey, $i % $k, 1)];
            $s3 = $vob[$i % 2];
            $q = ($q + $s1 + $s2 + $s3) % 61;
            $cpt .= substr($longKey, $q, 1);
        }
        return ['o' => $offerCode, 'cpt' =>$cpt];
    }

}
