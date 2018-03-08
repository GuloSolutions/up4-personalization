<?php
namespace Controllers;

use Illuminate\Database\Eloquent\Model as Model;
use Models\User;
use Models\Up4User;

class Coupon
{
    const PCODE = 'camhong2296@yahoo.com';

    const DEVELOPEMENT_CPT_OVERIDE = 'ndq2QwGjFT97N6h6lyRD4fVT9wL';

    private $short_cipher;
    private $long_cipher;
    private $offer_code;


    public function __construct(string $long_cipher, string $short_cipher, string $offer_code)
    {
        $this->setLongCipher($long_cipher);
        $this->setShortCipher($short_cipher);
        $this->setOfferCode($offer_code);
    }

    // SHORT_KEY and LONG_KEY are production keys;
    const PIN_CODE='wdoidjqoixmxq[]qd-02-';
    const SHORT_KEY= 'vcb4fdqpzw';
    const LONG_KEY = 'ZtQ7OsPjRc1XAex8DL3ulMYig65naf9zNyFBv2oTpwGkVWShUIKqEC4JHdbrm';

    public function encodeRequest()
    {
        if (!isset($this->long_cipher) || !isset($this->short_cipher) || !isset($this->offer_code)) {
            return false;
        }

        $decodeX = " abcdefghijklmnopqrstuvwxyz0123456789!$%()*+,-.@;<=>?[]^_{|}~";
        $encodeModulo = array_fill(0, 256, 0);
        $vob[0] = $this->offer_code % 100;
        $vob[1] = ($this->offer_code / 100) % 100;

        for ($i = 0; $i < 61; $i++) {
            $encodeModulo[substr($decodeX, $i, 1)] = $i;
        }
        $pinCode = strtolower(self::PIN_CODE) . strval($this->offer_code);
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

        if (self::DEVELOPEMENT_CPT_OVERIDE) {
            $cpt = self::DEVELOPEMENT_CPT_OVERIDE;
        }

        return [
            'o' => $this->offer_code,
            'p' => self::PCODE,
            'cpt' =>$cpt
        ];
    }

    public function setLongCipher(string $long_cipher)
    {
        $this->long_cipher = $long_cipher;
    }

    public function setShortCipher(string $short_cipher)
    {
        $this->short_cipher = $short_cipher;
    }

    public function setOfferCode(string $offer_code)
    {
        $this->offer_code = $offer_code;
    }
}
