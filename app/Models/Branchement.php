<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Branchement extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $guarded = [];

    protected $primaryKey = 'num_branchemment';
    protected $keyType = 'string';

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->incrementing = false;
        });
    }

    public function secteur(): BelongsTo
    {
        return $this->belongsTo(Secteur::class, 'code_secteur', 'code_secteur');
    }

    public function pointLivraisons(): HasMany
    {
        return $this->hasMany(PointLivraison::class, 'num_branchemment', 'num_branchemment');
    }
}
