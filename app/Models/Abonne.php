<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Abonne extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = [];
    protected $primaryKey = 'numero_abonne';
    protected $keyType = 'string';

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->incrementing = false;
        });
    }
}
//https://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@github.com/Johannos135/simple_shell
//https://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@github.com/Johannos135/esgae