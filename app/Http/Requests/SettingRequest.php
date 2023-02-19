<?php

namespace App\Http\Requests;

use App\Role;
use App\User;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class SettingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'mail_driver' => [
                'required', 'min:3'
            ],
            'mail_username' => [
                'required', 'email'
            ],
            'mail_host' => [
                'required',
            ],
            'mail_port' => [
                'required', 'min:2'
            ],
            'mail_password' => [
                'required',
            ],
            'mail_encryption' => [
                'required',
            ],
            'mail_from_name' => [
                'required',
            ]
        ];
    }

}
