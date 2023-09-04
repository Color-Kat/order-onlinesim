<?php

namespace App\Http\Middleware;
use Closure;
use Illuminate\Support\Facades\Auth;
use Stevebauman\Location\Facades\Location;

class LastOnlineAt
{
    public function handle($request, Closure $next)
    {
        // Guest check
        if (auth()->guest()) {
            return $next($request);
        }

        // Get auth user
        $user = Auth::user();

        // Update last online at field every few minutes
        if ($user->last_online_at->diffInMinutes(now()) > 2) {
            $user->update([
                "last_online_at" => now(),
            ]);
        }

        return $next($request);
    }
}