<?php

namespace App\Lcdepay\Facades;

use Illuminate\Support\Facades\Facade;

class LcdePay extends Facade
{
    protected static function getFacadeAccessor()
    {
        return "LcdePay";
    }
}
