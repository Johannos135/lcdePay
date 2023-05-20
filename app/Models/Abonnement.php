<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Abonnement extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $guarded = [];

    protected $primaryKey = 'num_abonnement';
    protected $keyType = 'string';

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->incrementing = false;
        });
    }

    public function abonne(): BelongsTo
    {
        return $this->belongsTo(Abonne::class, 'num_abonne', 'numero_abonne');
    }

    public function categorie(): BelongsTo
    {
        return $this->belongsTo(Categorie::class, 'code_categorie', 'code_categorie');
    }

    public function agence(): BelongsTo
    {
        return $this->belongsTo(Agence::class, 'num_agence', 'numero_agence');
    }

    public function direction(): BelongsTo
    {
        return $this->belongsTo(Direction::class, 'num_direction', 'numero_direction');
    }

    public function secteur(): BelongsTo
    {
        return $this->belongsTo(Secteur::class, 'code_secteur', 'code_secteur');
    }
}
