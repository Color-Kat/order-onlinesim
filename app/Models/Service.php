<?php

namespace App\Models;

use App\Models\Traits\HasImage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    use HasImage;

    protected $guarded = ['id'];

    /**
     * Retrieves the countries associated with the service.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function countries()
    {
        return $this->belongsToMany(
            Country::class,
            'country_service',
            'service_short_name',
            'country_short_name',
            'short_name',
            'short_name'
        );
    }
}
