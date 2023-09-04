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


if (!function_exists('getUserIP')) {
    function getUserIP()
    {
        // Get real visitor IP behind CloudFlare network
        if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
            $_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
            $_SERVER['HTTP_CLIENT_IP'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
        }
        $client = @$_SERVER['HTTP_CLIENT_IP'];
        $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
        $remote = $_SERVER['REMOTE_ADDR'];

        if (filter_var($client, FILTER_VALIDATE_IP)) {
            $ip = $client;
        } elseif (filter_var($forward, FILTER_VALIDATE_IP)) {
            $ip = $forward;
        } else {
            $ip = $remote;
        }

        return $ip;
    }
}