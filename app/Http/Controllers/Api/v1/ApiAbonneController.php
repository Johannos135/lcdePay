<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Abonne;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ApiAbonneController extends Controller
{
    //
    public function login(Request $request)
    {
        $numeroAbonne = $request->numero_abonne;

        // Effectuez les vérifications nécessaires pour valider le numéro d'abonné dans votre base de données

        try {
            //code...
            $user = Abonne::where('numero_abonne', $numeroAbonne)->first();

            if (!$user) {
                return response()->json(['message' => 'Numéro d\'abonné invalide'], 401);
            }

            // Si le numéro d'abonné est valide, générez un token d'authentification


            $token = Str::random(60); // Générez un token unique (vous pouvez utiliser une logique plus sécurisée)

            // Stockez le token dans votre base de données, associé à l'abonné correspondant


            $user->token = $token;
            $user->save();


            return response()->json([
                'success' => true,
                'message' => "Connexion effectuée avec succès",
                'token' => $token,
                'data' => $user
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => "Numéro d'abonné invalide",
            ], 400);
        }
    }
    public function getAbonneById($numeroAbonne)
    {
        // Effectuez les vérifications nécessaires pour valider le numéro d'abonné dans votre base de données

        try {
            //code...
            $user = Abonne::where('numero_abonne', $numeroAbonne)->first();

            if (!$user) {
                return response()->json(['message' => 'Numéro d\'abonné invalide'], 401);
            }


            return response()->json([
                'success' => true,
                'message' => "Information personnelle de l'abonné",
                'data' => $user,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => "Un problème est survenu lors de la récupération \ndes informations de l'abonné",
            ], 400);
        }
    }
}
