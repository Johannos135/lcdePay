<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PointLivraison extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $guarded = [];

    protected $primaryKey = 'num_point_livraison';
    protected $keyType = 'string';

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->incrementing = false;
        });
    }
}
