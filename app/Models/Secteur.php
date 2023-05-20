<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Secteur extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $guarded = [];


    protected $primaryKey = 'code_secteur';
    protected $keyType = 'string';

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->incrementing = false;
        });
    }

    public function branchements(): HasMany
    {
        return $this->hasMany(Branchement::class, 'code_secteur', 'code_secteur');
    }
}
