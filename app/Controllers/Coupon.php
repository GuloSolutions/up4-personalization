<?php
namespace Controllers;

use Illuminate\Database\Eloquent\Model as Model;
use Models\User;
use Models\Up4User;

class Coupon
{
    private $short_cipher;
    private $long_cipher;
    private $offer_code;

    public function __construct(string $long_cipher, string $short_cipher, string $offer_code)
    {
        $this->setLongCipher($long_cipher);
        $this->setShortCipher($short_cipher);
        $this->setOfferCode($offer_code);
    }

    public function encodeRequest($pCode)
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

        $pinCode = strtolower($pCode) . strval($this->offer_code);

        if (strlen($pinCode) < 20) {
            $pinCode .= ' couponsincproduction';
            $pinCode = substr($pinCode, 0, 20);
        }

        $q = 0;
        $j = strlen($pinCode);
        $k = strlen($this->short_cipher);

        $s1 = $s2 = $s3 = null;
        $cpt = '';

        for ($i = 0; $i < $j; $i++) {
            $s1 = $encodeModulo[substr($pinCode, $i, 1)];
            $s2 = 2 * $encodeModulo[substr($this->short_cipher, $i % $k, 1)];
            $s3 = $vob[$i % 2];
            $q = ($q + $s1 + $s2 + $s3) % 61;
            $cpt .= substr($this->long_cipher, $q, 1);
        }

        return [
            'o' => $this->offer_code,
            'p' => $pCode,
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
