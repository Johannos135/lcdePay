<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Direction extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $guarded = [];

    protected $primaryKey = 'numero_direction';
    // protected $keyType = 'numeric';

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->incrementing = true;
        });
    }

    public function agences(): HasMany
    {
        return $this->hasMany(Agence::class, 'numero_direction', 'numero_direction');
    }
}
