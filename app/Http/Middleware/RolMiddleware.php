<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RolMiddleware
{
    public function handle($request, Closure $next, $rol)
    {
        if (Auth::check() && Auth::user()->rol === $rol) {
            return $next($request);
        }

        abort(403, 'No tienes permiso para acceder a esta ruta.');
    }
}
