<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Facture extends Model
{
    use HasFactory;
    //    use SoftDeletes;
    protected $guarded = [];


    protected $primaryKey = 'numero_facture';
    protected $keyType = 'string';

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->incrementing = false;
        });
    }

    public function recus(): BelongsToMany
    {
        return $this->belongsToMany(Recu::class, 'facture_recus', 'numero_facture', 'num_recu')->withTimestamps();
    }

    public function abonnement(): belongsTo
    {
        return $this->belongsTo(Abonnement::class, 'num_abonnement', 'num_abonnement');
    }

    public function secteur(): belongsTo
    {
        return $this->belongsTo(Secteur::class, 'code_secteur', 'code_secteur');
    }

    public function periode(): belongsTo
    {
        return $this->belongsTo(PeriodeFacturation::class, 'code_periode', 'code_periode');
    }
}
