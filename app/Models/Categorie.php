<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Categorie extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $guarded = [];

    protected $primaryKey = 'code_categorie';
    // protected $keyType = 'bigInt';

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->incrementing = true;
        });
    }
}
