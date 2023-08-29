<?php

/**
 * Generates a JSON API response with the given data, status code, message, and errors.
 *
 * @param array $response An array containing the response data, status, message, and errors.
 * @param int $code The HTTP status code for the response. Defaults to 200.
 * @return \Illuminate\Http\JsonResponse The JSON response.
 */
if (!function_exists('apiResponse')) {
    function apiResponse(array $response, $code = 200)
    {
        $status = $response['status'] ?? 'success';
        $data = $response['data'] ?? null;
        $message = $response['message'] ?? '';
        $errors = $response['errors'] ?? [];

        return response()->json([
            'status'  => $status,
            'code'    => $code,
            'data'    => $data,
            'message' => $message,
            'errors'  => $errors
        ], $code);
    }
}