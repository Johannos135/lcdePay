<?php

namespace App\Auth;

use Illuminate\Auth\SessionGuard;

class LcdeGuard extends SessionGuard
{
    /**
     * Validate a user's credentials.
     *
     * @param  mixed  $user
     * @param  array  $credentials
     * @return bool
     */
    protected function validateCredentials($user, array $credentials)
    {
        // Ne pas vérifier le mot de passe
        return true;
    }
}
