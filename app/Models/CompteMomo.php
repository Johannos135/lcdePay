<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CompteMomo extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $guarded = [];

    protected $primaryKey = 'numero_compte';
    protected $keyType = 'string';

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->incrementing = false;
        });
    }
}
