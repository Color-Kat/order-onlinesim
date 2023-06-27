<?php

namespace App\Models\Traits;

use Illuminate\Support\Facades\File;

trait HasPhotos
{
    public function getPhotosAttribute()
    {
        $crmId = $this->crmId;
        $type = $this->typeDeal;
        $photos = [];

        $directory = public_path("storage/gallery/$type/$crmId/");

        if (is_dir($directory)) {


            $photos = array_values(
                array_map(function ($value) use ($directory, $crmId, $type) {
                    return "/storage/gallery/$type/$crmId/" . $value;
                }, array_diff(scandir($directory), array('..', '.')))
            );
        }

        natcasesort($photos);

        return $photos;
    }

    public static function storePhotos($request, $type) {
        $inputPhotos = $request->hasFile('photos');

        if(empty($inputPhotos)) return [];

        $photos = [];
        $photosPath = public_path("storage/gallery/{$type}/{$request->crmId}/");

        // Delete previous files
        File::deleteDirectory($photosPath);

        // Upload new photos
        if ($inputPhotos) {
            foreach($request->file('photos') as $key => $photo){
                $photoName = $photo->getClientOriginalName() . '.' .$photo->extension();

                $photos[] = $photo->move(
                    $photosPath,
                    $photoName
                );
            }
        }

        return $photos;
    }
}

