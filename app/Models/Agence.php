<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Agence extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = [];

    protected $primaryKey = 'numero_agence';
    // protected $keyType = 'numeric';

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->incrementing = true;
        });
    }

    public function direction(): BelongsTo
    {
        return $this->belongsTo(Direction::class, 'numero_direction', 'numero_direction');
    }
}
