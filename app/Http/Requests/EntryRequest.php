<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class EntryRequest
 *
 * This class handles the validation rules and authorization for entry requests.
 */
class EntryRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array The validation rules.
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'organization' => 'nullable|string|max:255',
            'location' => 'nullable|string|max:255',
            'type' => 'required|in:experience,volunteering,education',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'current' => 'boolean',
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool True if the user is authorized, false otherwise.
     */
    public function authorize(): bool
    {
        return false;
    }
}
