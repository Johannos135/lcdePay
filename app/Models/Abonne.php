<?php

namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Auth\Authenticatable as AuthenticatableTrait;

class Abonne extends Model implements Authenticatable
{
    use AuthenticatableTrait;
    use HasFactory;
    use SoftDeletes;

    protected $table = 'abonnes';
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

    /**
     * Get the unique identifier for the user.
     *
     * @return mixed
     */
    public function getAuthIdentifier()
    {
        return $this->numero_abonne;
    }

    /**
     * Get the password for the user.
     *
     * @return string|null
     */
    public function getAuthPassword()
    {
        return null;
    }

    public function abonnements(): HasMany
    {
        return $this->hasMany(Abonnement::class, 'num_abonne', 'numero_abonne');
    }
}
//https://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@github.com/Johannos135/simple_shell
//https://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@github.com/Johannos135/esgae