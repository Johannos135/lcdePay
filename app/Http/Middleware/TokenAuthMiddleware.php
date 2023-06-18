<?php

namespace App\Http\Middleware;

use App\Models\Abonne;
use Closure;
use Illuminate\Http\Request;

class TokenAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $token = $request->header('Authorization');

        if (!$token) {
            return response()->json(['message' => 'Token manquant'], 401);
        }

        // Vérifiez la validité du token dans votre base de données
        $abonne = Abonne::where('token', $token)->first();

        if (!$abonne) {
            return response()->json(['message' => 'Token invalide'], 401);
        }

        // Stockez l'utilisateur dans la requête pour une utilisation ultérieure
        // $request->user = $user;

        return $next($request);
    }
}
