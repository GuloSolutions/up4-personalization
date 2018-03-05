<?php
namespace Controllers;

use Illuminate\Database\Eloquent\Model as Model;
use Models\User;
use Models\Up4User;

class Coupon
{
    const PCODE = 'camhong2296@yahoo.com';

    const DEVELOPEMENT_CPT_OVERIDE = 'ndq2QwGjFT97N6h6lyRD4fVT9wL';

    // provided by Coupons.com
    private $checkCode;
    // LONG_KEY and SHORT_CODE are production; PIN_CODE needs update
    const PIN_CODE='wdoidjqoixmxq[]qd-02-';
    const SHORT_KEY= 'DJHDWQE233203289HDD0D29';
    const LONG_KEY = 'DSDSKLDSHLDAJKDAH';

    public function encodeRequest($offerCode)
    {
        $decodeX = " abcdefghijklmnopqrstuvwxyz0123456789!$%()*+,-.@;<=>?[]^_{|}~";
        $encodeModulo = array_fill(0, 256, 0);
        $vob[0] = $offerCode % 100;
        $vob[1] = ($offerCode / 100) % 100;

        for ($i = 0; $i < 61; $i++) {
            $encodeModulo[substr($decodeX, $i, 1)] = $i;
        }
        $pinCode = strtolower(self::PIN_CODE) . strval($offerCode);
        if (strlen($pinCode) < 20) {
            $pinCode .= ' couponsincproduction';
            $pinCode = substr($pinCode, 0, 20);
        }

        $q = 0;
        $j = strlen($pinCode);
        $k = strlen(self::SHORT_KEY);
        $s1 = $s2 = $s3 = null;
        $cpt = '';

        for ($i = 0; $i < $j; $i++) {
            $s1 = $encodeModulo[substr($pinCode, $i, 1)];
            $s2 = 2 * $encodeModulo[substr(self::SHORT_KEY, $i % $k, 1)];
            $s3 = $vob[$i % 2];
            $q = ($q + $s1 + $s2 + $s3) % 61;
            $cpt .= substr(self::LONG_KEY, $q, 1);
        }

        if(self::DEVELOPEMENT_CPT_OVERIDE) {
            $cpt = self::DEVELOPEMENT_CPT_OVERIDE;
        }

        return [
            'o' => $offerCode,
            'p' => self::PCODE,
            'cpt' =>$cpt
        ];
    }
}
