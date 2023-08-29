<?php

namespace App\Http\Requests\Admin\Services;

use Illuminate\Foundation\Http\FormRequest;

class CreateServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'string|required',
            'short_name' => 'string|required|unique:services,short_name|max:255',
            'default_price' => 'numeric|required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:4096',
        ];
    }
}
