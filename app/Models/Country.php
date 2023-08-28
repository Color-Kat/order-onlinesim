<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $appends = ['image'];

    /**
     * Accessor for the country flag.
     * @return string
     */
    public function getImageAttribute() {
        return asset('storage/flags/' . $this->code . '.svg');
    }

    /**
     * Retrieve the services associated with the current country.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function services()
    {
        return $this->belongsToMany(Service::class, 'country_service', 'country_short_name', 'service_short_name');
    }
}
