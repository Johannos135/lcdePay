<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PeriodeFacturation extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $guarded = [];


    protected $primaryKey = 'code_periode';
    protected $keyType = 'numeric';

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->incrementing = false;
        });
    }
}
